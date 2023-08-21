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
    `Caso de Teste - 001 Cadastro de Usuários com CPF inválido`,
    `
    <ul>
        <li>O sistema de cadastro de usuários está em um estado inicial e disponível para testes.</li>
        <li>Não há nenhum usuário cadastrado com o CPF inválido no sistema.</li>
        <li>O usuário tem acesso válido ao sistema de cadastro.</li>
        <li>Os campos de entrada de dados para o cadastro de usuários estão visíveis e funcionando corretamente.</li>
        <li>Os campos obrigatórios para o cadastro de usuários estão corretamente identificados.</li>
    </ul>
    `,
    `<ul>
        <li>O sistema não permite o cadastro de usuários com CPF inválido.</li>
        <li>Não ocorre nenhum registro de usuário com CPF inválido no banco de dados do sistema.</li>
        <li>Todas as informações inseridas durante a tentativa de cadastro inválido são corretamente tratadas e não causam problemas no sistema.</li>
        <li>Ao tentar cadastrar um usuário com CPF inválido, uma mensagem de erro apropriada é exibida para o usuário.</li>
        <li>Os campos do formulário de cadastro são limpos corretamente após a tentativa de cadastro inválido.</li>
        <li>O sistema permanece em um estado consistente após a tentativa de cadastro inválido, permitindo que novas tentativas de cadastro sejam realizadas corretamente.</li>
    </ul>
    `,
    `
    <ul>
        <li>Passo 1: Acessar a página de cadastro de usuários.</li>
        <li>Passo 2: Preencher os campos obrigatórios do formulário de cadastro, incluindo o CPF inválido.</li>
        <li>Passo 3: Enviar o formulário de cadastro.</li>
        <li>Passo 4: Verificar se uma mensagem de erro apropriada é exibida para indicar que o CPF é inválido.</li>
        <li>Passo 5: Verificar se o sistema não permite a criação do usuário com CPF inválido.</li>
        <li>Passo 6: Verificar se os campos do formulário são limpos corretamente após a tentativa de cadastro inválido.</li>
        <li>Passo 7: Repetir os passos de 1 a 6 para diferentes casos de CPF inválido, como CPF com dígitos repetidos, CPF com dígito verificador inválido, etc.</li>
    </ul>
    `,
    `
    <ul>
        <li>Entrada:
            <ul>
                <li>Campo CPF: inserir um CPF inválido (por exemplo, um CPF com dígitos repetidos).</li>
                <li>Outros campos de entrada do formulário de cadastro: preencher com dados válidos para os testes.</li>
            </ul>
        </li>
        <li>Saída:
            <ul>
                <li>Mensagem de erro apropriada é exibida indicando que o CPF é inválido.</li>
                <li>Usuário não é cadastrado no sistema.</li>
                <li>Campos do formulário de cadastro permanecem com os dados preenchidos para correção.</li>
            </ul>
        </li>
    </ul>
    `,
    `
    <ul>
        <li>Verificar se o sistema valida corretamente o formato do CPF, rejeitando formatos inválidos.</li>
        <li>Testar diferentes casos de CPF inválido, como CPF com dígitos repetidos, CPF com dígito verificador inválido, CPF com caracteres especiais, etc.</li>
        <li>Confirmar se o sistema exibe uma mensagem de erro específica quando um CPF inválido é inserido.</li>
        <li>Garantir que o sistema não permita o cadastro de usuários com CPF inválido, mantendo a integridade dos dados.</li>
        <li>Verificar se as validações relacionadas ao CPF são aplicadas apenas no momento do cadastro e não interferem em outras funcionalidades do sistema.</li>
    </ul>
    `,
    `
    <ul>
        <li>Sistema Operacional: Windows 10</li>
        <li>Navegador: Google Chrome versão 90</li>
        <li>Linguagem de Programação: JavaScript</li>
        <li>Tecnologias: HTML, CSS, Bootstrap</li>
        <li>Banco de Dados: MySQL</li>
        <li>Software de Gestão de RH: Versão 2.0</li>
    </ul>
    `,
    `Manual`,
    `1 Iteração`
];

CaseItem[1] = [
    `Caso de Teste - 002 Alteração dos dados cadastrais de um funcionário sem permissão`,
    `
    <ul>
        <li>O sistema de gestão de RH está em um estado inicial e disponível para testes.</li>
        <li>O funcionário-alvo não tem permissão para alterar seus próprios dados cadastrais.</li>
        <li>O usuário tem acesso válido ao sistema de gestão de RH.</li>
        <li>O sistema exibe corretamente os dados cadastrais do funcionário.</li>
        <li>Os campos de edição de dados cadastrais estão visíveis e funcionando corretamente.</li>
        <li>As permissões de acesso do usuário estão corretamente configuradas.</li>
    </ul>
    `,
    `<ul>
        <li>O sistema não permite a alteração dos dados cadastrais de um funcionário sem permissão.</li>
        <li>Não ocorre nenhum registro de alteração indevida nos dados cadastrais do funcionário no banco de dados do sistema.</li>
        <li>Todas as informações inseridas durante a tentativa de alteração indevida são corretamente tratadas e não causam problemas no sistema.</li>
        <li>Ao tentar alterar os dados cadastrais de um funcionário sem permissão, uma mensagem de erro apropriada é exibida para o usuário.</li>
        <li>Os dados cadastrais do funcionário não são modificados após a tentativa de alteração indevida.</li>
        <li>O sistema permanece em um estado consistente após a tentativa de alteração indevida, permitindo que outras operações sejam realizadas corretamente.</li>
    </ul>
    `,
    `
    <ul>
        <li>Passo 1: Acessar a página de edição de dados cadastrais do funcionário.</li>
        <li>Passo 2: Verificar se os campos de edição estão corretamente bloqueados para o funcionário sem permissão.</li>
        <li>Passo 3: Tentar modificar os dados cadastrais do funcionário sem permissão.</li>
        <li>Passo 4: Verificar se uma mensagem de erro apropriada é exibida para indicar a falta de permissão.</li>
        <li>Passo 5: Verificar se os dados cadastrais do funcionário não foram alterados.</li>
        <li>Passo 6: Repetir os passos de 1 a 5 para diferentes funcionários sem permissão.</li>
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
                <li>Dados cadastrais do funcionário permanecem inalterados.</li>
            </ul>
        </li>
    </ul>
    `,
    `
    <ul>
        <li>Verificar se o sistema valida corretamente as permissões de acesso para a alteração dos dados cadastrais.</li>
        <li>Testar diferentes casos de funcionários sem permissão, incluindo funcionários de diferentes níveis hierárquicos, funcionários desligados, etc.</li>
        <li>Confirmar se o sistema exibe uma mensagem de erro específica quando um funcionário sem permissão tenta realizar a alteração.</li>
        <li>Garantir que o sistema não permita a modificação dos dados cadastrais de um funcionário sem permissão, mantendo a integridade dos dados.</li>
        <li>Verificar se as validações relacionadas às permissões de acesso são aplicadas corretamente e não interferem em outras funcionalidades do sistema.</li>
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

CaseItem[2] = [
    `Caso de Teste - 003 Rastreamento de Onibus`,
    `
    <ul>
        <li>O sistema de rastreamento esta disponível para testes.</li>
        <li>Não há nenhum dispositivo com as mesmas informações do novo dispositivo.</li>
        <li>O usuário tem acesso válido ao sistema onde é localizado o dispositivo.</li>
        <li>As validações de dados estão corretamente configuradas.</li>
    </ul>
    `,
    `<ul>
        <li>O sistema não permite a inclusão de um novo dispositivo com dados já cadastrados.</li>
        <li>Todas as informações inseridas durante a tentativa de inclusão são corretamente tratadas e não causam problemas no sistema.</li>
        <li>Ao tentar incluir um novo dispositivo com dados já cadastrados, uma mensagem de erro apropriada é exibida para o usuário.</li>
        <li>Os campos do formulário de inclusão são limpos corretamente após a tentativa de inclusão inválida.</li>
        <li>O sistema permanece em um estado consistente após a tentativa de inclusão inválida, permitindo que novas tentativas de inclusão sejam realizadas corretamente.</li>
    </ul>
    `,
    `
    <ul>
        <li>Passo 1: Acessar a página de inclusão de um novo dispositivo.</li>
        <li>Passo 2: Preencher os campos obrigatórios do formulário de inclusão com informações de um dispositivo já cadastrado.</li>
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
                <li>Campos do formulário de inclusão permanecem com os dados preenchidos para correção.</li>
            </ul>
        </li>
    </ul>
    `,
    `
    <ul>
        <li>Testar diferentes cenários de inclusão com dados já cadastrados, como inclusão de dispostivo com mesmo ID.</li>
        <li>Confirmar se o sistema exibe uma mensagem de erro específica quando dados já cadastrados são inseridos.</li>
        <li>Garantir que o sistema não permita a inclusão de um novo dispositivo com dados duplicados, mantendo a integridade dos dados.</li>
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
    `Caso de Teste - 004 Validação dos dados por base do cartão do SUS`,
    `
    <ul>
        <li>O sistema de autenticação está em um estado inicial e disponível para testes.</li>
        <li>Não há nenhum usuário cadastrado no sistema com as informações do SUS a serem validadas.</li>
        <li>O usuário tem acesso válido ao sistema de autenticação.</li>
        <li>Os campos de entrada de dados para a validação de usuário estão visíveis e funcionando corretamente.</li>
        <li>As validações de dados estão corretamente configuradas.</li>
    </ul>
    `,
    `<ul>
        <li>Não ocorre nenhuma autenticação de RG inexistente no sistema.</li>
        <li>Todas as informações inseridas durante a tentativa de validação são corretamente tratadas e não causam problemas no sistema.</li>
        <li>Ao tentar validar um usuário com RG inexistente, uma mensagem de erro apropriada é exibida para o usuário.</li>
        <li>Os campos do formulário de validação são limpos corretamente após a tentativa de validação inválida.</li>
        <li>O sistema permanece em um estado consistente após a tentativa de validação de informação inválida, permitindo que novas tentativas de validação de informação sejam realizadas corretamente.</li>
    </ul>
    `,
    `
    <ul>
        <li>Passo 1: Acessar a página de configuração do usuário.</li>
        <li>Passo 2: Preencher os campos do formulário de validação com RG.</li>
        <li>Passo 3: Enviar o formulário de validação.</li>
        <li>Passo 4: Verificar se uma mensagem de erro apropriada é exibida para indicar que RG é inexistente.</li>
        <li>Passo 5: Verificar se o sistema não permite a validação de RG inexistente.</li>
        <li>Passo 6: Verificar se os campos do formulário são limpos corretamente após a tentativa de validação inválida.</li>
        <li>Passo 7: Repetir os passos de 1 a 6 para diferentes dados inexistentes.</li>
    </ul>
    `,
    `
    <ul>
        <li>Entrada:
            <ul>
                <li>Campos de validação do usuário: preencher com as credenciais do RG existente.</li>
            </ul>
        </li>
        <li>Saída:
            <ul>
                <li>Mensagem de erro apropriada é exibida indicando que os dados fornecidos é inexistente.</li>
                <li>Usuário não é validado no sistema.</li>
                <li>Campos do formulário de validação permanecem com os dados preenchidos para correção.</li>
            </ul>
        </li>
    </ul>
    `,
    `
    <ul>
        <li>Verificar se o sistema realiza a validação do RG.</li>
        <li>Testar diferentes cenários de validação com informações inexistentes.</li>
        <li>Confirmar se o sistema exibe uma mensagem de erro específica quando uma informação inexistente é inserido.</li>
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
    `Caso de Teste - 005 Verificar os pontos de embarque desembarque dos automóveis`,
    `
    <ul>
        <li>O sistema de gestão de ponto está em um estado inicial e disponível para testes.</li>
        <li>O dispositivo já possui um registro no sistema.</li>
        <li>O sistema verifica os pontos de embarque e desembarque.</li>
        <li>Os pontos de parada dos automóveis estão visíveis no mapa.</li>
        <li>O usuário tem acesso ao mapa, onde é rastreado o percurso do automóvel.</li>
    </ul>
    `,
    `<ul>
        <li>O sistema não permite a inclusão de pontos de embarque e desembarque fora da rota do automóvel.</li>
        <li>Não ocorre nenhuma alteração indevida na rota do automóvel.</li>
        <li>Todas as informações inseridas são corretamente tratadas e não causam problemas no sistema.</li>
        <li>Ao tentar incluir pontos de desembarque e embarque invalidos, uma mensagem de erro apropriada é exibida para o usuário.</li>
    </ul>
    `,
    `
    <ul>
        <li>Passo 1: Acessar o mapa da rota do automóvel.</li>
        <li>Passo 2: Adicionar pontos de desembarque e embarque na rota do automóvel.</li>
        <li>Passo 3: Verificar se uma mensagem de erro apropriada é exibida para indicar que o ponto esta fora da rota do automóvel.</li>
        <li>Passo 4: Repetir os passos de 1 a 3 para diferentes dados inexistentes.</li>
    </ul>
    `,
    `
    <ul>
        <li>Entrada:
            <ul>
                <li>Inserir os pontos de desembarque e embarque corretamente no mapa.</li>
            </ul>
        </li>
        <li>Saída:
            <ul>
                <li>Mensagem de erro apropriada é exibida indicando que os pontos estão fora da rota.</li>
            </ul>
        </li>
    </ul>
    `,
    `
    <ul>
        <li>Verificar se o sistema valida corretamente os pontos de desembarque e embarque na rota do automóvel.</li>
        <li>Confirmar se o sistema exibe uma mensagem de erro específica quando um ponto fora da rota do automóvel é realizada.</li>
        <li>Garantir que o sistema não permita a inclusão de pontos fora da rota do automóvel.</li>
        <li>Verificar se as validações da rota do automóvel não interferem em outras funcionalidades do sistema.</li>
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
