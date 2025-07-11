//
//  Copyright (c) Honda Research Institute Europe GmbH
//
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are
//  met:
//
//  1. Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//
//  3. Neither the name of the copyright holder nor the names of its
//     contributors may be used to endorse or promote products derived from
//     this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
//  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
//  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
//  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
//  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
//  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
//  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
//  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
//  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//
import styled from "styled-components";
import { Color } from "../store";
import { useTranslation } from "react-i18next";

interface ColoredCircleProps {
    color: Color;
}

const ColoredCircle = styled.div<ColoredCircleProps>`
    background-color: ${(props) => props.theme.palette.card.color[props.color]};
    color: ${(props) => (props.color === Color.UNKNOWN ? "white" : "initial")};
    transition: all 1s;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: xx-large;
`;

export interface CardImageProps {
    number: number | string;
    color: Color;
}

export default function CardImage({
    number,
    color,
}: CardImageProps): JSX.Element {
    const { t } = useTranslation();

    return <ColoredCircle color={color}>{t(`rank.${number}`)}</ColoredCircle>;
}
