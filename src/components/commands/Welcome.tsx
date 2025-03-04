import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
V     V Y   Y  SSS  H  H N   N  AA  V     V     RRRR 
V     V  Y Y  S     H  H NN  N A  A V     V     R   R
 V   V    Y    SSS  HHHH N N N AAAA  V   V      RRRR 
  V V     Y       S H  H N  NN A  A   V V       R R  
   V      Y   SSSS  H  H N   N A  A    V        R  RR                                                                                       
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
V     V Y   Y  SSS  H  H N   N  AA  V     V     RRRR 
V     V  Y Y  S     H  H NN  N A  A V     V     R   R
 V   V    Y    SSS  HHHH N N N AAAA  V   V      RRRR 
  V V     Y       S H  H N  NN A  A   V V       R R  
   V      Y   SSSS  H  H N   N A  A    V        R  RR   
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
        For a better view, switch to the desktop site if using mobile.
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                   @@@@@                     
                @@@@@@@@@@@@                 
               @@@%@@#@@@%@@@%               
              #@@@@@@@@@@@@@@@@@             
              @@@@@@=       @@.              
              @*      :.     @               
              :: @@#    %@@+ @               
             ##*.@@@@=-@@@@=.%               
              %@            %+               
               @:   .  :   .@                
                -:@@@@@@@@:*                 
                *#   =:   +=                 
               @#+@*    *@*@#                
              #@@  *@@@@#  @@*               
           +%%###@       .######:            
       :@@#-=--.###. ...=@+#---@@@#          
      #####.####@.@@-:..#@.@=*##.=--#@       
      #*-#--#:=-# +######=+# ++-=#--###      
      @@*@#-@@@#@*-%@@@%@#@@-@#%#%=.*-#      
      -- @+-= : =---#. -- ----:: @-+*@@      
      ##### ##+### ##:#####==####@-*=.=      
      #@#@@@@#%#@@@@%@#%##@%@#%##@@@#@@      

         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
