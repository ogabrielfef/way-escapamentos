<?php

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Método inválido"]);
    exit;
}

// Sanitização básica
$nome = htmlspecialchars($_POST["nome"] ?? "");
$telefone = htmlspecialchars($_POST["telefone"] ?? "");
$email = htmlspecialchars($_POST["email"] ?? "");
$razaoSocial = htmlspecialchars($_POST["razaoSocial"] ?? "");
$cnpj = htmlspecialchars($_POST["cnpj"] ?? "");
$tipoCliente = htmlspecialchars($_POST["tipoCliente"] ?? "");
$tipoProduto = htmlspecialchars($_POST["tipoProduto"] ?? "");
$veiculo = htmlspecialchars($_POST["veiculo"] ?? "");
$mensagem = htmlspecialchars($_POST["mensagem"] ?? "");

// Validação mínima
if (!$nome || !$telefone || !$email || !$mensagem) {
    echo json_encode(["success" => false, "message" => "Campos obrigatórios faltando"]);
    exit;
}

// Email da empresa (USE O DO DOMÍNIO)
$to = "contato@seudominio.com";
$subject = "Nova Solicitação de Orçamento";

$body = "
Nova Solicitação de Orçamento

Nome: $nome
Telefone: $telefone
Email: $email
Razão Social: $razaoSocial
CNPJ: $cnpj
Tipo Cliente: $tipoCliente
Tipo Produto: $tipoProduto
Veículo: $veiculo

Mensagem:
$mensagem
";

$headers = "From: contato@seudominio.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Erro ao enviar email"]);
}