function enviarScript(scriptText){
    const lines = scriptText.split("\n"); 

    let i = 0;       

    setInterval(() => { 
        if(i >= lines.length) return

        if(lines[i].trim() != ''){ 
            console.log(lines[i]); 
    
            window.InputEvent = window.Event || window.InputEvent;
    
            const event = new InputEvent('input', { bubbles: true });
    
            const textbox = document.querySelector('div._2_1wd[data-tab="6"]');
    
            textbox.textContent = lines[i];
    
            textbox.dispatchEvent(event);
    
            document.querySelector("button._1E0Oz").click();                   

        }
        i++;
    }, 250)
}

enviarScript(`Roteiro para teatro - Chapeuzinho Vermelho
                           Teatro Chapeuzinho Vermelho
Narrador- Chapeuzinho Vermelho tinha esse nome porque sua mãe  fez para ela um capuz todo vermelho.
Mãe – Chapeuzinho vermelho, Chapeuzinho vermelho.
Chapeuzinho vermelho – Oi mamãe!
Mãe – Leva esses doces para a sua vovozinha, mais cuidado pelo o caminho pois, tem um lobo andando por aí.
Chapeuzinho vermelho – pode deixar mamãe.
Narrador – Chapeuzinho vermelho foi toda alegre andando pela floresta, logo na frente ela encontrou o lobo.
Lobo –  Onde você está indo menina?
Chapeuzinho vermelho – Vou levar uns doces para a vovozinha.
Lobo – Vá pelo caminho da floresta que é mais perto.
Chapeuzinho vermelho – Ah, muito obrigada seu lobo.
Narrador-  Chapeuzinho vermelho acreditando no lobo foi pelo caminho que ele indicou. Só que o lobo muito esperto enganou a chapeuzinho vermelho e foi pelo o caminho mais perto e chegou a casa da vovó primeiro.
Lobo – Toc – Toc
Vovó – Quem é ?
Narrador – O lobo disse imitando a voz da Chapeuzinho vermelho.
Lobo – Oi, vovó sou eu chapeuzinho vermelho.
Vovó – Entre minha netinha a porta está aberta.
Narrador – Chapeuzinho vermelho estranhou aquela voz, mas entrou assim mesmo. Quando ela viu a vovozinha ela estranhou e perguntou:

Chapeuzinho vermelho –   Que olhos grandes?
                                               Que  nariz grande?
                                               Que  mãos grandes?
                                               Que boca grande?
Lobo – É pra de devorar.
Narrador- o lobo saiu correndo atrás da Chapeuzinho vermelho e ela gritava pedindo Socorro...  Socorro. Neste mesmo instante passava por ali um caçador que ouviu os gritos de Chapeuzinho vermelho.
Caçadores –  O que está acontecendo?
Chapeuzinho vermelho – O lobo está querendo me pegar.
Narrador – Ao ver que o lobo queria devorar a Chapeuzinho vermelho,os caçadores deram uma paulada  na cabeça do lobo. O lobo caiu morto, e logo em seguida os caçadores  colocaram  o lobo na cama  cortaram sua barriga e tiraram a vovozinha inteirinha e com vida.
Chapeuzinho vermelho –  Vovó você está bem?
Vovó – Estou sim minha netinha.
Narrador – As duas se abraçaram. Nesse mesmo instante os caçadores levaram o lobo  embora e fizeram um lindo tapete  com seu pêlo e presentearam as duas, que viveram felizes para sempre.

                                                 FIM

`);