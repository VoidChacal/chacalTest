function ocultar(obj, es){
    let div = document.querySelector(obj);
    if(es==1){
        div.style.display = 'flex';
    }else{
        div.style.display = 'none';
    };
};

function red(page){
    window.location = page;
}

const CaseItem = [];
//0-Name, 1-Pré-Condições, 2-Pós-Condições, 3-Detalhamento, 4-Massa de entrada e saída,
//5-Critérios Especiais, 6-Ambiente, 7-Implementação, 8-Iteração
CaseItem[0] = [
    `Caso de Teste - 001 Validar Cadrastro`,
    `
    <ul>
        <li>O sistema de cadastro de usuários está em um estado inicial e disponível para testes.</li>
        <li>Não há nenhum usuário cadastrado com o Telefone inválido no sistema.</li>
        <li>Não há nenhum usuário cadastrado com o RG inválido no sistema.</li>
        <li>O usuário tem acesso válido ao sistema de cadastro.</li>
        <li>Os campos de entrada de dados para o cadastro de usuários estão visíveis e funcionando corretamente.</li>
        <li>Os campos obrigatórios para o cadastro de usuários estão corretamente identificados.</li>
    </ul>
    `,
    `<ul>
        <li>O sistema não permite o cadastro de usuários com Telefone inválido.</li>
        <li>O sistema não permite o cadastro de usuários com RG inválido.</li>
        <li>Não ocorre nenhum registro de usuário com Telefone inválido no banco de dados do sistema.</li>
        <li>Não ocorre nenhum registro de usuário com RG inválido no banco de dados do sistema.</li>
        <li>Todas as informações inseridas durante a tentativa de cadastro inválido são corretamente tratadas e não causam problemas no sistema.</li>
        <li>Ao tentar cadastrar um usuário com Telefone inválido, uma mensagem de erro apropriada é exibida para o usuário.</li>
        <li>Os campos do formulário de cadastro são limpos corretamente após a tentativa de cadastro inválido.</li>
        <li>O sistema permanece em um estado consistente após a tentativa de cadastro inválido, permitindo que novas tentativas de cadastro sejam realizadas corretamente.</li>
    </ul>
    `,
    `
    <ul>
        <li>Passo 1: Acessar a página de cadastro de usuários.</li>
        <li>Passo 2: Preencher os campos obrigatórios do formulário de cadastro, incluindo o Telefone e RG inválido.</li>
        <li>Passo 3: Enviar o formulário de cadastro.</li>
        <li>Passo 4: Verificar se uma mensagem de erro apropriada é exibida para indicar que o Telefone é inválido.</li>
        <li>Passo 5: Verificar se o sistema não permite a criação do usuário com Telefone ou RG inválido.</li>
        <li>Passo 6: Verificar se os campos do formulário são limpos corretamente após a tentativa de cadastro inválido.</li>
        <li>Passo 7: Repetir os passos de 1 a 6 para diferentes casos de Telefone inválido, como Telefone com dígitos repetidos, Telefone com dígito verificador inválido, etc.</li>
    </ul>
    `,
    `
    <ul>
        <li>Entrada:
            <ul>
                <li>Campo Telefone: inserir um Telefone inválido (por exemplo, um Telefone com dígitos repetidos).</li>
                <li>Campo RG: inserir um Telefone inválido (por exemplo, um RG com dígitos repetidos).</li>
                <li>Outros campos de entrada do formulário de cadastro: preencher com dados válidos para os testes.</li>
            </ul>
        </li>
        <li>Saída:
            <ul>
                <li>Mensagem de erro apropriada é exibida indicando que o Telefone é inválido.</li>
                <li>Usuário não é cadastrado no sistema.</li>
                <li>Campos do formulário de cadastro permanecem com os dados preenchidos para correção.</li>
            </ul>
        </li>
    </ul>
    `,
    `
    <ul>
        <li>Verificar se o sistema valida corretamente o formato do Telefone, rejeitando formatos inválidos.</li>
        <li>Verificar se o sistema valida corretamente o formato do RG, rejeitando formatos inválidos.</li>
        <li>Testar diferentes casos de Telefone inválido, Telefone com dígito verificador inválido, Telefone com caracteres especiais, etc.</li>
        <li>Confirmar se o sistema exibe uma mensagem de erro específica quando um Telefone inválido é inserido.</li>
        <li>Confirmar se o sistema exibe uma mensagem de erro específica quando um RG inválido é inserido.</li>
        <li>Garantir que o sistema não permita o cadastro de usuários com Telefone inválido, mantendo a integridade dos dados.</li>
        <li>Verificar se as validações relacionadas ao Telefone são aplicadas apenas no momento do cadastro e não interferem em outras funcionalidades do sistema.</li>
    </ul>
    `,
    `
    <ul>
        <li>Sistema Operacional: Windows 10</li>
        <li>Navegador: Google Chrome versão 90</li>
        <li>Linguagem de Programação: JavaScript, php</li>
        <li>Tecnologias: HTML, CSS, Bootstrap</li>
        <li>Banco de Dados: MySQL</li>
    </ul>
    `,
    `Manual`,
    `1 Iteração`
];

CaseItem[1] = [
    `Caso de Teste - 002 Uso do Login`,
    `
    <ul>
        <li>O sistema de gestão de RH está em um estado inicial e disponível para testes.</li>
    </ul>
    `,
    `<ul>
        <li>O sistema não permite a alteração dos dados cadastrais de um funcionário sem permissão.</li>
    </ul>
    `,
    `
    <ul>
        <li>Passo 1: Acessar a página de edição de dados cadastrais do funcionário.</li>
    </ul>
    `,
    `
    <ul>
        <li>Entrada:
            <ul>
                <li>Dados cadastrais do funcionário: tentar modificar um ou mais campos.</li>
            </ul>
        </li>
        <li>Saída:
            <ul>
                <li>Mensagem de erro apropriada é exibida indicando a falta de permissão para a alteração.</li>
            </ul>
        </li>
    </ul>
    `,
    `
    <ul>
        <li>Verificar se o sistema valida corretamente as permissões de acesso para a alteração dos dados cadastrais.</li>
    </ul>
    `,
    `
    <ul>
        <li>Sistema Operacional: Windows 10</li>
        <li>Navegador: Google Chrome versão 90</li>
        <li>Linguagem de Programação: JavaScript</li>
        <li>Tecnologias: HTML, CSS, React</li>
        <li>Banco de Dados: PostgreSQL</li>
    </ul>
    `,
    `Manual`,
    `1 Iteração`
];

CaseItem[2] = [
    `Caso de Teste - 003 Inclusão de um novo funcionário já cadastrado`,
    `
    <ul>
        <li>O sistema de gestão de RH está em um estado inicial e disponível para testes.</li>
        <li>Não há nenhum funcionário cadastrado com as mesmas informações do novo funcionário a ser incluído.</li>
        <li>O usuário tem acesso válido ao sistema de gestão de RH.</li>
        <li>Os campos de entrada de dados para a inclusão de um novo funcionário estão visíveis e funcionando corretamente.</li>
        <li>As validações de dados estão corretamente configuradas.</li>
    </ul>
    `,
    `<ul>
        <li>O sistema não permite a inclusão de um novo funcionário com dados já cadastrados.</li>
        <li>Não ocorre nenhum registro duplicado de funcionário no banco de dados do sistema.</li>
        <li>Todas as informações inseridas durante a tentativa de inclusão são corretamente tratadas e não causam problemas no sistema.</li>
        <li>Ao tentar incluir um novo funcionário com dados já cadastrados, uma mensagem de erro apropriada é exibida para o usuário.</li>
        <li>Os campos do formulário de inclusão são limpos corretamente após a tentativa de inclusão inválida.</li>
        <li>O sistema permanece em um estado consistente após a tentativa de inclusão inválida, permitindo que novas tentativas de inclusão sejam realizadas corretamente.</li>
    </ul>
    `,
    `
    <ul>
        <li>Passo 1: Acessar a página de inclusão de um novo funcionário.</li>
        <li>Passo 2: Preencher os campos obrigatórios do formulário de inclusão com informações de um funcionário já cadastrado.</li>
        <li>Passo 3: Enviar o formulário de inclusão.</li>
        <li>Passo 4: Verificar se uma mensagem de erro apropriada é exibida para indicar que os dados já estão cadastrados.</li>
        <li>Passo 5: Verificar se o sistema não permite a inclusão do novo funcionário com dados já cadastrados.</li>
        <li>Passo 6: Verificar se os campos do formulário são limpos corretamente após a tentativa de inclusão inválida.</li>
        <li>Passo 7: Repetir os passos de 1 a 6 para diferentes funcionários com dados já cadastrados.</li>
    </ul>
    `,
    `
    <ul>
        <li>Entrada:
            <ul>
                <li>Campos de inclusão do funcionário: preencher com dados de um funcionário já cadastrado.</li>
            </ul>
        </li>
        <li>Saída:
            <ul>
                <li>Mensagem de erro apropriada é exibida indicando que os dados já estão cadastrados.</li>
                <li>Novo funcionário não é cadastrado no sistema.</li>
                <li>Campos do formulário de inclusão permanecem com os dados preenchidos para correção.</li>
            </ul>
        </li>
    </ul>
    `,
    `
    <ul>
        <li>Verificar se o sistema realiza a validação de duplicidade dos dados do novo funcionário.</li>
        <li>Testar diferentes cenários de inclusão com dados já cadastrados, como inclusão de funcionário com mesmo nome, mesmo CPF, etc.</li>
        <li>Confirmar se o sistema exibe uma mensagem de erro específica quando dados já cadastrados são inseridos.</li>
        <li>Garantir que o sistema não permita a inclusão de um novo funcionário com dados duplicados, mantendo a integridade dos dados.</li>
        <li>Verificar se as validações de duplicidade são aplicadas apenas no momento da inclusão e não interferem em outras funcionalidades do sistema.</li>
    </ul>
    `,
    `
    <ul>
        <li>Sistema Operacional: Windows 10</li>
        <li>Navegador: Google Chrome versão 90</li>
        <li>Linguagem de Programação: JavaScript</li>
        <li>Tecnologias: HTML, CSS, React</li>
        <li>Banco de Dados: PostgreSQL</li>
        <li>Software de Gestão de RH: Versão 2.0</li>
    </ul>
    `,
    `Manual`,
    `1 Iteração`
];

CaseItem[3] = [
    `Caso de Teste - 004 Validação de usuário no sistema inexistente`,
    `
    <ul>
        <li>O sistema de autenticação está em um estado inicial e disponível para testes.</li>
        <li>Não há nenhum usuário cadastrado no sistema com as credenciais a serem validadas.</li>
        <li>O usuário tem acesso válido ao sistema de autenticação.</li>
        <li>Os campos de entrada de dados para a validação de usuário estão visíveis e funcionando corretamente.</li>
        <li>As validações de dados estão corretamente configuradas.</li>
    </ul>
    `,
    `<ul>
        <li>O sistema não permite a validação de um usuário inexistente.</li>
        <li>Não ocorre nenhuma autenticação de usuário inexistente no sistema.</li>
        <li>Todas as informações inseridas durante a tentativa de validação são corretamente tratadas e não causam problemas no sistema.</li>
        <li>Ao tentar validar um usuário inexistente, uma mensagem de erro apropriada é exibida para o usuário.</li>
        <li>Os campos do formulário de validação são limpos corretamente após a tentativa de validação inválida.</li>
        <li>O sistema permanece em um estado consistente após a tentativa de validação inválida, permitindo que novas tentativas de validação sejam realizadas corretamente.</li>
    </ul>
    `,
    `
    <ul>
        <li>Passo 1: Acessar a página de validação de usuário.</li>
        <li>Passo 2: Preencher os campos obrigatórios do formulário de validação com as credenciais de um usuário inexistente.</li>
        <li>Passo 3: Enviar o formulário de validação.</li>
        <li>Passo 4: Verificar se uma mensagem de erro apropriada é exibida para indicar que o usuário é inexistente.</li>
        <li>Passo 5: Verificar se o sistema não permite a validação do usuário inexistente.</li>
        <li>Passo 6: Verificar se os campos do formulário são limpos corretamente após a tentativa de validação inválida.</li>
        <li>Passo 7: Repetir os passos de 1 a 6 para diferentes usuários inexistentes.</li>
    </ul>
    `,
    `
    <ul>
        <li>Entrada:
            <ul>
                <li>Campos de validação do usuário: preencher com as credenciais de um usuário inexistente.</li>
            </ul>
        </li>
        <li>Saída:
            <ul>
                <li>Mensagem de erro apropriada é exibida indicando que o usuário é inexistente.</li>
                <li>Usuário não é validado no sistema.</li>
                <li>Campos do formulário de validação permanecem com os dados preenchidos para correção.</li>
            </ul>
        </li>
    </ul>
    `,
    `
    <ul>
        <li>Verificar se o sistema realiza a validação de existência do usuário antes de conceder acesso.</li>
        <li>Testar diferentes cenários de validação com usuários inexistentes, como validação com usuário inexistente, com senha incorreta, etc.</li>
        <li>Confirmar se o sistema exibe uma mensagem de erro específica quando um usuário inexistente é inserido.</li>
        <li>Garantir que o sistema não permita a validação de usuários inexistentes, mantendo a segurança do sistema.</li>
        <li>Verificar se as validações de usuário inexistente são aplicadas apenas no momento da validação e não interferem em outras funcionalidades do sistema.</li>
    </ul>
    `,
    `
    <ul>
        <li>Sistema Operacional: Windows 10</li>
        <li>Navegador: Google Chrome versão 90</li>
        <li>Linguagem de Programação: JavaScript</li>
        <li>Tecnologias: HTML, CSS, React</li>
        <li>Banco de Dados: PostgreSQL</li>
        <li>Software de Gestão de RH: Versão 2.0</li>
    </ul>
    `,
    `Manual`,
    `1 Iteração`
];

CaseItem[4] = [
    `Caso de Teste - 005 Inclusão de faltas no banco de horas de um funcionário sem permissão`,
    `
    <ul>
        <li>O sistema de gestão de ponto está em um estado inicial e disponível para testes.</li>
        <li>O funcionário alvo do teste já possui um registro no banco de horas.</li>
        <li>O usuário tem acesso válido ao sistema de gestão de ponto.</li>
        <li>Os campos de entrada de dados para a inclusão de faltas estão visíveis e funcionando corretamente.</li>
        <li>O usuário não possui permissão para incluir faltas no banco de horas de outros funcionários.</li>
    </ul>
    `,
    `<ul>
        <li>O sistema não permite a inclusão de faltas no banco de horas de um funcionário sem permissão.</li>
        <li>Não ocorre nenhuma alteração indevida no banco de horas do funcionário.</li>
        <li>Todas as informações inseridas durante a tentativa de inclusão de faltas são corretamente tratadas e não causam problemas no sistema.</li>
        <li>Ao tentar incluir faltas sem permissão, uma mensagem de erro apropriada é exibida para o usuário.</li>
        <li>Os campos do formulário de inclusão de faltas são limpos corretamente após a tentativa inválida.</li>
        <li>O sistema permanece em um estado consistente após a tentativa inválida, permitindo que outras operações sejam realizadas corretamente.</li>
    </ul>
    `,
    `
    <ul>
        <li>Passo 1: Acessar a página de inclusão de faltas no banco de horas.</li>
        <li>Passo 2: Selecionar o funcionário alvo do teste.</li>
        <li>Passo 3: Preencher os campos obrigatórios do formulário de inclusão de faltas.</li>
        <li>Passo 4: Enviar o formulário de inclusão de faltas.</li>
        <li>Passo 5: Verificar se uma mensagem de erro apropriada é exibida para indicar que o usuário não possui permissão.</li>
        <li>Passo 6: Verificar se o sistema não permite a inclusão de faltas sem permissão.</li>
        <li>Passo 7: Verificar se os campos do formulário são limpos corretamente após a tentativa inválida.</li>
    </ul>
    `,
    `
    <ul>
        <li>Entrada:
            <ul>
                <li>Funcionário: selecionar o funcionário alvo do teste.</li>
                <li>Campos de inclusão de faltas: preencher com os dados necessários para a inclusão de faltas.</li>
            </ul>
        </li>
        <li>Saída:
            <ul>
                <li>Mensagem de erro apropriada é exibida indicando que o usuário não possui permissão.</li>
                <li>Nenhuma falta é registrada no banco de horas do funcionário.</li>
                <li>Campos do formulário de inclusão de faltas permanecem com os dados preenchidos para correção.</li>
            </ul>
        </li>
    </ul>
    `,
    `
    <ul>
        <li>Verificar se o sistema valida corretamente a permissão do usuário antes de permitir a inclusão de faltas.</li>
        <li>Testar diferentes casos de inclusão de faltas sem permissão, como tentativa de inclusão por um usuário comum e tentativa de inclusão por um usuário com permissão limitada.</li>
        <li>Confirmar se o sistema exibe uma mensagem de erro específica quando uma inclusão de faltas sem permissão é realizada.</li>
        <li>Garantir que o sistema não permita a inclusão de faltas sem permissão, mantendo a integridade do banco de horas.</li>
        <li>Verificar se as validações de permissão são aplicadas apenas no momento da inclusão de faltas e não interferem em outras funcionalidades do sistema.</li>
    </ul>
    `,
    `
    <ul>
        <li>Sistema Operacional: Windows 10</li>
        <li>Navegador: Google Chrome versão 90</li>
        <li>Linguagem de Programação: JavaScript</li>
        <li>Tecnologias: HTML, CSS, React</li>
        <li>Banco de Dados: PostgreSQL</li>
        <li>Software de Gestão de Ponto: Versão 2.0</li>
    </ul>
    `,
    `Manual`,
    `1 Iteração`
];
