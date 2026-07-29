# alfabio-site

Site estático da AlfaBio para publicação no GitHub Pages.

## Publicação

Este repositório pode ser publicado diretamente pelo GitHub Pages a partir da branch `main` e da pasta raiz (`/`).

### Passos
1. Acesse **Settings** no repositório.
2. Abra **Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Em **Branch**, escolha `main`.
5. Em **Folder**, escolha `/(root)`.
6. Clique em **Save**.

### Domínio personalizado

Para usar o domínio `www.alfabioequipamentos.com.br`:

1. No arquivo `README.md` já deixamos a orientação de publicação.
2. Em **Settings > Pages**, informe o domínio personalizado `www.alfabioequipamentos.com.br`.
3. No DNS do seu provedor, crie um registro **CNAME** apontando `www` para o domínio do GitHub Pages do repositório.
4. Se quiser usar o domínio raiz `alfabioequipamentos.com.br`, configure também os registros **A** conforme a documentação do GitHub Pages.

## Observação importante

O conteúdo atual do `index.html` ainda aponta URLs canônicas e imagens para `https://www.alfabioequipamentos.com.br/ecotherm/`. Se o site for publicado no GitHub Pages e você quiser manter o domínio próprio, pode ser necessário revisar essas URLs depois da publicação.
