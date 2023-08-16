import { BaseProps } from '../../interfaces/interfaces';
import assets from '../../components/assets';
import svgHole from '../../assets/svg/hole.svg';
import Image from '../../components/image';

const HomePageRoadMap = () => {
  return (
    <div>
      <div className={'t1a mb-16 text-center md:text-left title-roadmap'}>ROADMAP</div>
      <div className={'relative'}>
        <_Row
          signBoardText={'2023 Q3'}
          signBoardHoleStyle={{
            width: 178,
          }}
          textList={['Frontend improvement', 'Full functional and integrated BOS components', 'Revised Tokenomics']}
        />
        <_Row
          style={{
            marginTop: 169,
          }}
          signBoardWrapStyle={{
            left: 223,
          }}
          signBoardStyle={{
            transform: 'rotate(5deg)',
            top: 30,
          }}
          signBoardStickStyle={{
            transform: 'rotate(5deg)',
          }}
          signBoardHoleStyle={{
            width: 280,
          }}
          signBoardText={'2023 Q4'}
          textList={['Flash loan & Flash liquidation', 'Supply Tokenization', 'Margin trading']}
        />
        <_Row
          style={{
            marginTop: 164,
          }}
          signBoardWrapStyle={{
            left: 83,
          }}
          signBoardStyle={{
            top: 20,
          }}
          signBoardHoleStyle={{
            width: 323,
          }}
          signBoardText={'2024'}
          textList={['Native stable coin', '...']}
        />
        <Line />
      </div>
    </div>
  );
};

interface RowProps extends BaseProps {
  signBoardText: string;
  textList: Array<string>;
  signBoardWrapStyle?: object;
  signBoardStyle?: object;
  signBoardStickStyle?: object;
  signBoardHoleStyle?: object;
  style?: object;
}

const _Row = (props: RowProps) => {
  return (
    <div className={'my-16 flex flex-col lg:flex-row justify-between lg:items-center roadmap-item'} style={props?.style}>
      <SignBoard
        style={props?.signBoardWrapStyle}
        signBoardStyle={props?.signBoardStyle}
        signBoardStickStyle={props?.signBoardStickStyle}
        signBoardHoleStyle={props.signBoardHoleStyle}
      >
        <span className={'t1a text-primary-500 -mt-2'}>{props?.signBoardText}</span>
      </SignBoard>
      <div className={"px-4 xs:px-0"}>
        {props?.textList?.map((d) => (
          <div key={d} className={'t2 mb-8 flex items-center font-normal'}>
            <div className={'signboard-ball bg-primary-500 mr-5'} />
            <div className={'signboard-text'}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface SignBoardProps extends BaseProps {
  style?: object;
  signBoardStyle?: object;
  signBoardHoleStyle?: object;
  signBoardStickStyle?: object;
}

const SignBoard = ({ children, style, signBoardStyle, signBoardHoleStyle, signBoardStickStyle = {} }: SignBoardProps) => {
  return (
    <div className={'signboard-wrap'} style={style}>
      <div className={'signboard z-30'} style={signBoardStyle}>
        {children}
      </div>
      <div className={'relative signboard-stand'}>
        <div className={'signboard-stick absolute z-20'} style={{ marginBottom: 2, ...signBoardStickStyle }} />

        <div className={'relative z-10'}>
          <Image src={assets.svg.svgHole} style={signBoardHoleStyle} />
        </div>
      </div>
    </div>
  );
};

const Line = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="601"
      height="718"
      className={'roadmap-line lg:block hidden'}
      viewBox="0 0 601 718"
      fill="none"
    >
      <path
        d="M51 1C-115.5 34.5 180.4 137.7 236 164.5C305.5 198 514.721 296.798 369.5 370.5C103.5 505.5 541.337 505.5 592 584C637.5 654.5 485 717.5 308.5 717.5"
        stroke="#D2FF3A"
        strokeDasharray="4 6"
      />
    </svg>
  );
};

export default HomePageRoadMap;
