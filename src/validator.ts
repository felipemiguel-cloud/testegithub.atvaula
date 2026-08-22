function validarChamado(titulo: string): boolean {
  // O .trim() remove os espaços em branco antes de verificar
  if (!titulo || titulo.trim() === "" || titulo === "adoleta") {
    throw new Error("O título do chamado não pode ser vazio.");
  }

  return true;
}

export default validarChamado;