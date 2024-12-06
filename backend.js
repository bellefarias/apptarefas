// Lista que irá armazenar as tarefas
let tarefas = [];

// Função para adicionar uma nova tarefa
function adicionarTarefa(titulo, prioridade, dataAgendamento = null) {
    const tarefa = {
        id: tarefas.length + 1, // Gerar um ID único para cada tarefa
        titulo: titulo,
        concluida: false,
        prioridade: prioridade, // Pode ser: 'alta', 'media', 'baixa'
        dataAgendamento: dataAgendamento,
    };

    tarefas.push(tarefa);
    console.log(`Tarefa "${titulo}" adicionada com sucesso!`);
}

// Função para remover uma tarefa por ID
function removerTarefa(id) {
    const index = tarefas.findIndex(tarefa => tarefa.id === id);
    if (index !== -1) {
        tarefas.splice(index, 1);
        console.log(`Tarefa de ID ${id} removida com sucesso!`);
    } else {
        console.log(`Tarefa com ID ${id} não encontrada.`);
    }
}

// Função para marcar uma tarefa como concluída
function concluirTarefa(id) {
    const tarefa = tarefas.find(tarefa => tarefa.id === id);
    if (tarefa) {
        tarefa.concluida = true;
        console.log(`Tarefa "${tarefa.titulo}" marcada como concluída.`);
    } else {
        console.log(`Tarefa com ID ${id} não encontrada.`);
    }
}

// Função para listar todas as tarefas pendentes
function listarTarefasPendentes() {
    const pendentes = tarefas.filter(tarefa => !tarefa.concluida);
    console.log("Tarefas Pendentes:");
    pendentes.forEach(tarefa => {
        console.log(`ID: ${tarefa.id} | Título: ${tarefa.titulo} | Prioridade: ${tarefa.prioridade} | Agendamento: ${tarefa.dataAgendamento || 'Não agendada'}`);
    });
}

// Função para listar todas as tarefas concluídas
function listarTarefasConcluidas() {
    const concluídas = tarefas.filter(tarefa => tarefa.concluida);
    console.log("Tarefas Concluídas:");
    concluídas.forEach(tarefa => {
        console.log(`ID: ${tarefa.id} | Título: ${tarefa.titulo} | Prioridade: ${tarefa.prioridade} | Agendamento: ${tarefa.dataAgendamento || 'Não agendada'}`);
    });
}

// Função para organizar as tarefas por prioridade
function organizarPorPrioridade() {
    const organizada = tarefas.sort((a, b) => {
        const prioridades = { 'alta': 1, 'media': 2, 'baixa': 3 };
        return prioridades[a.prioridade] - prioridades[b.prioridade];
    });

    console.log("Tarefas Organizadas por Prioridade:");
    organizada.forEach(tarefa => {
        console.log(`ID: ${tarefa.id} | Título: ${tarefa.titulo} | Prioridade: ${tarefa.prioridade} | Agendamento: ${tarefa.dataAgendamento || 'Não agendada'}`);
    });
}

// Função para agendar uma tarefa
function agendarTarefa(id, dataAgendamento) {
    const tarefa = tarefas.find(tarefa => tarefa.id === id);
    if (tarefa) {
        tarefa.dataAgendamento = dataAgendamento;
        console.log(`Tarefa "${tarefa.titulo}" agendada para ${dataAgendamento}.`);
    } else {
        console.log(`Tarefa com ID ${id} não encontrada.`);
    }
}

// Testes
adicionarTarefa("Comprar leite", "alta");
adicionarTarefa("Estudar JavaScript", "media", "2024-12-10 10:00");
adicionarTarefa("Ir ao médico", "baixa", "2024-12-08 14:00");
listarTarefasPendentes();
concluirTarefa(1);
listarTarefasConcluidas();
organizarPorPrioridade();
removerTarefa(2);
listarTarefasPendentes();
