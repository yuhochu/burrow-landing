import { BaseProps } from '../../interfaces/interfaces';
import assets from '../../components/assets';
import svgHole from '../../assets/svg/hole.svg';
import Image from '../../components/image';

const HomePageRoadMap = () => {
  return (
    <div>
      <div className={'t1a mb-16'}>ROADMAP</div>
      <div className={'relative'}>
        <_Row
          signBoardText={'2023 Q3'}
          signBoardHoleStyle={{
            width: 178
          }}
          textList={[
            'Frontend improvement',
            'Full functional and integrated BOS components',
            'Revised Tokenomics'
          ]}
        />
        <_Row
          style={{
            marginTop: 169
          }}
          signBoardWrapStyle={{
            left: 223
          }}
          signBoardStyle={{
            transform: 'rotate(5deg)',
            top: 30
          }}
          signBoardStickStyle={{
            transform: 'rotate(5deg)'
          }}
          signBoardHoleStyle={{
            width: 280
          }}
          signBoardText={'2023 Q4'}
          textList={[
            'Flash loan & Flash liquidation',
            'Supply Tokenization',
            'Margin trading'
          ]}
        />
        <_Row
          style={{
            marginTop: 164
          }}
          signBoardWrapStyle={{
            left: 83
          }}
          signBoardStyle={{
            top: 20
          }}
          signBoardHoleStyle={{
            width: 323
          }}
          signBoardText={'2024'}
          textList={[
            'Native stable coin',
            '...'
          ]}
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
    <div className={'my-16 flex justify-between items-center'} style={props?.style}>
      <SignBoard style={props?.signBoardWrapStyle}
                 signBoardStyle={props?.signBoardStyle}
                 signBoardStickStyle={props?.signBoardStickStyle}
                 signBoardHoleStyle={props.signBoardHoleStyle}>
        <span className={'t1a text-primary-500 -mt-2'}>
          {props?.signBoardText}
        </span>
      </SignBoard>
      <div>
        {props?.textList?.map((d) =>
          <div key={d} className={'t2 mb-8 flex items-center font-normal'}>
            <div className={'signboard-ball bg-primary-500 mr-5'} />
            <div className={'signboard-text'}>
              {d}
            </div>
          </div>)
        }
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

const SignBoard = ({
                     children,
                     style,
                     signBoardStyle,
                     signBoardHoleStyle,
                     signBoardStickStyle = {}
                   }: SignBoardProps) => {
  return (
    <div className={'signboard-wrap'} style={style}>
      <div className={'signboard z-30'} style={signBoardStyle}>{children}</div>
      <div className={'relative signboard-stand'}>
        <div
          className={'signboard-stick absolute z-20'}
          style={{ marginBottom: 2, ...signBoardStickStyle }}
        />

        <div className={'relative z-10'}>
          <Image src={assets.svg.svgHole} style={signBoardHoleStyle} />
        </div>


        {/*<svg*/}
        {/*  xmlns='http://www.w3.org/2000/svg'*/}
        {/*  width='180'*/}
        {/*  height='46'*/}
        {/*  viewBox='0 0 180 46'*/}
        {/*  fill='none'*/}
        {/*>*/}
        {/*  <path*/}
        {/*    d='M89.9546 45.5C65.3623 45.5 43.0815 43.0365 26.9343 39.045C18.8646 37.0503 12.2988 34.6672 7.7383 32.0019C3.21292 29.3572 0.500092 26.3359 0.500092 23.0112C0.500092 19.6865 3.21292 16.6653 7.7383 14.0205C12.2988 11.3553 18.8646 8.97219 26.9343 6.97743C43.0815 2.986 65.3623 0.522461 89.9546 0.522461C114.547 0.522461 136.828 2.986 152.975 6.97743C161.045 8.97219 167.611 11.3553 172.171 14.0205C176.696 16.6653 179.409 19.6865 179.409 23.0112C179.409 26.3359 176.696 29.3572 172.171 32.0019C167.611 34.6672 161.045 37.0503 152.975 39.045C136.828 43.0365 114.547 45.5 89.9546 45.5Z'*/}
        {/*    fill='#D2FF3A'*/}
        {/*    stroke='#D2FF3A'*/}
        {/*  />*/}
        {/*  <path*/}
        {/*    d='M89.9546 45.5C65.3623 45.5 43.0815 43.0365 26.9343 39.045C18.8646 37.0503 12.2988 34.6672 7.7383 32.0019C3.21292 29.3572 0.500092 26.3359 0.500092 23.0112C0.500092 19.6865 3.21292 16.6653 7.7383 14.0205C12.2988 11.3553 18.8646 8.97219 26.9343 6.97743C43.0815 2.986 65.3623 0.522461 89.9546 0.522461C114.547 0.522461 136.828 2.986 152.975 6.97743C161.045 8.97219 167.611 11.3553 172.171 14.0205C176.696 16.6653 179.409 19.6865 179.409 23.0112C179.409 26.3359 176.696 29.3572 172.171 32.0019C167.611 34.6672 161.045 37.0503 152.975 39.045C136.828 43.0365 114.547 45.5 89.9546 45.5Z'*/}
        {/*    fill='#D2FF3A'*/}
        {/*    stroke='#D2FF3A'*/}
        {/*  />*/}
        {/*  <path*/}
        {/*    fillRule='evenodd'*/}
        {/*    clipRule='evenodd'*/}
        {/*    d='M173.451 30.5784C160.955 22.1602 128.355 16.1567 90.107 16.1567C51.8592 16.1567 19.2594 22.1602 6.76257 30.5784C19.2594 38.9967 51.8592 45.0001 90.107 45.0001C128.355 45.0001 160.955 38.9967 173.451 30.5784Z'*/}
        {/*    fill='#14152B'*/}
        {/*  />*/}
        {/*</svg>*/}
      </div>
    </div>
  );
};

const Line = () => {
  return <svg xmlns='http://www.w3.org/2000/svg' width='601' height='718' className={'roadmap-line'}
              viewBox='0 0 601 718' fill='none'>
    <path
      d='M51 1C-115.5 34.5 180.4 137.7 236 164.5C305.5 198 514.721 296.798 369.5 370.5C103.5 505.5 541.337 505.5 592 584C637.5 654.5 485 717.5 308.5 717.5'
      stroke='#D2FF3A' strokeDasharray='4 6' />
  </svg>;
};

export default HomePageRoadMap;
