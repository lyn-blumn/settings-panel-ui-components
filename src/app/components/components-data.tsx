import { ComponentInfo } from './settings-library';
import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Switch } from './ui/switch';
import { Info, Plus, ChevronDown, Check, Circle, X, Loader2 } from 'lucide-react';
import InputLabel from '../../imports/InputLabel';
import InputWithCharLimit from '../../imports/Input';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';

// Generate all button variants based on Sort UI Design System
function generateButtonVariants(): ComponentInfo[] {
  const styles = [
    { id: 'primary', displayName: 'Primary' },
    { id: 'secondary', displayName: 'Secondary' },
    { id: 'dashed', displayName: 'Dashed' },
    { id: 'soft', displayName: 'Soft' },
    { id: 'ghost', displayName: 'Ghost' },
    { id: 'ghostMuted', displayName: 'Ghost Muted' },
    { id: 'destructive', displayName: 'Destructive' }
  ];
  
  const sizes = [
    { id: '2xs', displayName: '2XS', iconSize: 12 },
    { id: 'xs', displayName: 'XS', iconSize: 14 },
    { id: 'sm', displayName: 'SM', iconSize: 14 },
    { id: 'md', displayName: 'MD', iconSize: 16 },
    { id: 'lg', displayName: 'LG', iconSize: 18 }
  ];
  
  const shapes = [
    { id: 'rounded', displayName: 'Rounded' },
    { id: 'pill', displayName: 'Pill' }
  ];
  
  const iconConfigs = [
    { id: 'none', displayName: 'No Icon', leadIcon: false, tailIcon: false },
    { id: 'lead', displayName: 'Lead Icon', leadIcon: true, tailIcon: false },
    { id: 'tail', displayName: 'Tail Icon', leadIcon: false, tailIcon: true },
    { id: 'both', displayName: 'Both Icons', leadIcon: true, tailIcon: true },
  ];
  
  const states = [
    { id: 'default', displayName: 'Default', disabled: false, loading: false },
    { id: 'disabled', displayName: 'Disabled', disabled: true, loading: false },
    { id: 'loading', displayName: 'Loading', disabled: false, loading: true },
  ];
  
  const buttons: ComponentInfo[] = [];
  
  // Generate Default Variant (텍스트 버튼)
  for (const style of styles) {
    for (const size of sizes) {
      for (const shape of shapes) {
        for (const iconConfig of iconConfigs) {
          for (const state of states) {
            const id = `button-default-${style.id}-${size.id}-${shape.id}-${iconConfig.id}-${state.id}`;
            const name = `Button - ${style.displayName}`;
            
            const variants = [
              'Default',
              style.displayName,
              state.displayName,
              size.displayName,
              shape.displayName,
              iconConfig.displayName
            ];
            
            const component = (
              <Button
                variant="default"
                style={style.id as any}
                size={size.id as any}
                shape={shape.id as any}
                disabled={state.disabled}
                loading={state.loading}
                leadIcon={iconConfig.leadIcon ? <Circle size={size.iconSize} /> : undefined}
                tailIcon={iconConfig.tailIcon ? <Circle size={size.iconSize} /> : undefined}
              >
                버튼
              </Button>
            );
            
            const styleProps = `style="${style.id}"`;
            const sizeProps = size.id !== 'md' ? ` size="${size.id}"` : '';
            const shapeProps = shape.id !== 'rounded' ? ` shape="${shape.id}"` : '';
            const disabledProps = state.disabled ? ' disabled' : '';
            const loadingProps = state.loading ? ' loading' : '';
            const leadIconCode = iconConfig.leadIcon ? `\n  leadIcon={<Circle size={${size.iconSize}} />}` : '';
            const tailIconCode = iconConfig.tailIcon ? `\n  tailIcon={<Circle size={${size.iconSize}} />}` : '';
            
            const reactCode = `<Button ${styleProps}${sizeProps}${shapeProps}${disabledProps}${loadingProps}${leadIconCode}${tailIconCode}>\n  버튼\n</Button>`;
            
            buttons.push({
              id,
              category: 'button',
              name,
              variants,
              component,
              cssProperties: {
                'font-family': 'var(--font-family-suit)',
                'font-size': size.id === '2xs' || size.id === 'xs' ? 'var(--size-xs)' : 
                            size.id === 'lg' ? 'var(--size-md)' : 'var(--size-sm)',
                'font-weight': 'var(--font-weight-medium)',
                'height': size.id === '2xs' ? '24px' : size.id === 'xs' ? '28px' : 
                         size.id === 'sm' ? '32px' : size.id === 'md' ? '36px' : '40px',
                'padding': size.id === '2xs' ? '0 8px' : size.id === 'xs' ? '0 10px' :
                          size.id === 'sm' ? '0 12px' : size.id === 'md' ? '0 16px' : '0 24px',
                'border-radius': shape.id === 'pill' ? 'var(--radius-full)' : 'var(--radius-button)',
                'gap': size.id === '2xs' || size.id === 'xs' ? '4px' : 
                      size.id === 'sm' ? '6px' : '8px',
              },
              tailwindClasses: [
                'inline-flex', 'items-center', 'justify-center',
                `h-${size.id}`, `px-${size.id}`, `text-${size.id}`,
                shape.id === 'pill' ? 'rounded-full' : 'rounded-md'
              ],
              reactCode,
            });
          }
        }
      }
    }
  }
  
  // Generate Icon Only Variant
  for (const style of styles) {
    for (const size of sizes) {
      for (const shape of shapes) {
        for (const state of states) {
          const id = `button-icononly-${style.id}-${size.id}-${shape.id}-${state.id}`;
          const name = `Button - ${style.displayName} Icon`;
          
          const variants = [
            'Icon Only',
            style.displayName,
            state.displayName,
            size.displayName,
            shape.displayName
          ];
          
          const component = (
            <Button
              variant="iconOnly"
              style={style.id as any}
              size={size.id as any}
              shape={shape.id as any}
              disabled={state.disabled}
              loading={state.loading}
            >
              <Circle size={size.iconSize} />
            </Button>
          );
          
          const styleProps = `style="${style.id}"`;
          const sizeProps = size.id !== 'md' ? ` size="${size.id}"` : '';
          const shapeProps = shape.id !== 'rounded' ? ` shape="${shape.id}"` : '';
          const disabledProps = state.disabled ? ' disabled' : '';
          const loadingProps = state.loading ? ' loading' : '';
          
          const reactCode = `<Button variant="iconOnly" ${styleProps}${sizeProps}${shapeProps}${disabledProps}${loadingProps}>\n  <Circle size={${size.iconSize}} />\n</Button>`;
          
          buttons.push({
            id,
            category: 'button',
            name,
            variants,
            component,
            cssProperties: {
              'font-family': 'var(--font-family-suit)',
              'width': size.id === '2xs' ? '24px' : size.id === 'xs' ? '28px' : 
                      size.id === 'sm' ? '32px' : size.id === 'md' ? '36px' : '40px',
              'height': size.id === '2xs' ? '24px' : size.id === 'xs' ? '28px' : 
                       size.id === 'sm' ? '32px' : size.id === 'md' ? '36px' : '40px',
              'padding': '0',
              'border-radius': shape.id === 'pill' ? 'var(--radius-full)' : 'var(--radius-button)',
            },
            tailwindClasses: [
              'inline-flex', 'items-center', 'justify-center',
              `w-${size.id}`, `h-${size.id}`, 'p-0',
              shape.id === 'pill' ? 'rounded-full' : 'rounded-md'
            ],
            reactCode,
          });
        }
      }
    }
  }
  
  // Generate Badge variant (Primary style only, MD size, for simplicity)
  for (const style of styles) {
    const id = `button-badge-${style.id}`;
    const name = `Button - ${style.displayName} Badge`;
    
    const variants = [
      'Default',
      style.displayName,
      'Default',
      'MD',
      'Rounded',
      'Both Icons',
      'Badge'
    ];
    
    const component = (
      <Button
        variant="default"
        style={style.id as any}
        size="md"
        shape="rounded"
        leadIcon={<Circle size={16} />}
        tailIcon={<Circle size={16} />}
        badge="/"
      >
        버튼
      </Button>
    );
    
    const reactCode = `<Button style="${style.id}" leadIcon={<Circle size={16} />} tailIcon={<Circle size={16} />} badge="/">\n  버튼\n</Button>`;
    
    buttons.push({
      id,
      category: 'button',
      name,
      variants,
      component,
      cssProperties: {
        'font-family': 'var(--font-family-suit)',
        'font-size': 'var(--size-sm)',
        'font-weight': 'var(--font-weight-medium)',
        'height': '36px',
        'padding': '0 16px',
        'border-radius': 'var(--radius-button)',
        'gap': '8px',
      },
      tailwindClasses: ['inline-flex', 'items-center', 'justify-center', 'h-9', 'px-4'],
      reactCode,
    });
  }
  
  return buttons;
}

export function getComponentsData(): ComponentInfo[] {
  return [
    // Input - Basic
    {
      id: 'input-basic',
      category: 'input',
      name: 'Input - Basic',
      variants: ['default', 'disabled', 'error'],
      variantProperties: [
        { label: 'Variant', value: 'Default', type: 'text' },
        { label: 'Style', value: 'Default', type: 'text' },
        { label: 'Size', value: 'lg', type: 'text' },
        { label: 'State', value: 'Active', type: 'text' },
        { label: 'Placeholder', value: true, type: 'boolean' },
        { label: 'Label', value: true, type: 'boolean' },
      ],
      component: (
        <div className="space-y-2" style={{ width: '238px' }}>
          <Label>라벨명</Label>
          <Input placeholder="텍스트를 입력해주세요." />
        </div>
      ),
      cssProperties: {
        'display': 'flex',
        'width': '238px',
        'padding': 'var(--none, 0)',
        'flex-direction': 'column',
        'align-items': 'flex-start',
        'gap': 'var(--8, 8px)',
      },
      modes: [
        { label: 'Stroke', value: 'Auto (Default)' },
        { label: 'Colors', value: 'Auto (Default)' },
        { label: 'Themes', value: 'Auto (Theme-1-Light)' },
        { label: 'Font Family', value: 'Auto (SUIT)' },
        { label: 'Spacing', value: 'Auto (Default)' },
        { label: 'Font Size', value: 'Auto (Desktop)' },
        { label: 'Radius', value: 'Auto (Default)' },
      ],
      colors: [
        { name: 'text/default', value: 'var(--foreground)' },
        { name: 'border/default', value: 'var(--border)' },
        { name: 'bg/input', value: 'var(--input-background)' },
      ],
      tailwindClasses: ['flex', 'flex-col', 'items-start', 'gap-2', 'w-[238px]'],
      reactCode: `<div className="space-y-2" style={{ width: '238px' }}>
  <Label>라벨명</Label>
  <Input placeholder="텍스트를 입력해주세요." />
</div>`,
    },
    
    // Input - Required
    {
      id: 'input-required',
      category: 'input',
      name: 'Input - Required',
      variants: ['required'],
      variantProperties: [
        { label: 'Variant', value: 'Default', type: 'text' },
        { label: 'Style', value: 'Default', type: 'text' },
        { label: 'Size', value: 'lg', type: 'text' },
        { label: 'State', value: 'Active', type: 'text' },
        { label: 'Placeholder', value: true, type: 'boolean' },
        { label: 'Label', value: true, type: 'boolean' },
        { label: 'Required', value: true, type: 'boolean' },
      ],
      component: (
        <div className="space-y-2" style={{ width: '238px' }}>
          <Label>
            라벨명 <span style={{ color: 'var(--destructive)' }}>*</span>
          </Label>
          <Input placeholder="텍스트를 입력해주세요." />
        </div>
      ),
      cssProperties: {
        'display': 'flex',
        'width': '238px',
        'padding': 'var(--none, 0)',
        'flex-direction': 'column',
        'align-items': 'flex-start',
        'gap': 'var(--8, 8px)',
      },
      modes: [
        { label: 'Stroke', value: 'Auto (Default)' },
        { label: 'Colors', value: 'Auto (Default)' },
        { label: 'Themes', value: 'Auto (Theme-1-Light)' },
        { label: 'Font Family', value: 'Auto (SUIT)' },
        { label: 'Spacing', value: 'Auto (Default)' },
        { label: 'Font Size', value: 'Auto (Desktop)' },
        { label: 'Radius', value: 'Auto (Default)' },
      ],
      colors: [
        { name: 'text/default', value: 'var(--foreground)' },
        { name: 'text/destructive', value: 'var(--destructive)' },
        { name: 'border/default', value: 'var(--border)' },
        { name: 'bg/input', value: 'var(--input-background)' },
      ],
      tailwindClasses: ['flex', 'flex-col', 'items-start', 'gap-2', 'w-[238px]'],
      reactCode: `<div className="space-y-2" style={{ width: '238px' }}>
  <Label>
    라벨명 <span className="text-destructive">*</span>
  </Label>
  <Input placeholder="텍스트를 입력해주세요." />
</div>`,
    },
    
    // Input - With Tooltip
    {
      id: 'input-tooltip',
      category: 'input',
      name: 'Input - With Tooltip',
      variants: ['tooltip'],
      variantProperties: [
        { label: 'Variant', value: 'Default', type: 'text' },
        { label: 'Style', value: 'Default', type: 'text' },
        { label: 'Size', value: 'lg', type: 'text' },
        { label: 'State', value: 'Active', type: 'text' },
        { label: 'Tail Icon', value: true, type: 'boolean' },
        { label: 'Tail Icon', value: 'information-fill', type: 'icon' },
        { label: 'Placeholder', value: true, type: 'boolean' },
        { label: 'Label', value: true, type: 'boolean' },
      ],
      component: (
        <div className="space-y-2" style={{ width: '238px' }}>
          <div className="flex items-center gap-2">
            <Label>라벨명</Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info size={14} style={{ color: 'var(--muted-foreground)', cursor: 'pointer' }} />
              </TooltipTrigger>
              <TooltipContent>
                <p>This is helpful information</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Input placeholder="Placeholder text" />
        </div>
      ),
      cssProperties: {
        'display': 'flex',
        'width': '238px',
        'padding': 'var(--none, 0)',
        'flex-direction': 'column',
        'align-items': 'flex-start',
        'gap': 'var(--8, 8px)',
      },
      modes: [
        { label: 'Stroke', value: 'Auto (Default)' },
        { label: 'Colors', value: 'Auto (Default)' },
        { label: 'Themes', value: 'Auto (Theme-1-Light)' },
        { label: 'Font Family', value: 'Auto (SUIT)' },
        { label: 'Spacing', value: 'Auto (Default)' },
        { label: 'Font Size', value: 'Auto (Desktop)' },
        { label: 'Radius', value: 'Auto (Default)' },
      ],
      colors: [
        { name: 'text/muted', value: 'var(--muted-foreground)' },
        { name: 'text/default', value: 'var(--foreground)' },
        { name: 'border/default', value: 'var(--border)' },
        { name: 'bg/input', value: 'var(--input-background)' },
        { name: 'icon/muted', value: 'var(--muted-foreground)' },
      ],
      tailwindClasses: ['flex', 'flex-col', 'items-start', 'gap-2', 'w-[238px]'],
      reactCode: `<div className="space-y-2" style={{ width: '238px' }}>
  <div className="flex items-center gap-2">
    <Label>라벨명</Label>
    <Tooltip>
      <TooltipTrigger asChild>
        <Info size={14} className="text-muted-foreground cursor-pointer" />
      </TooltipTrigger>
      <TooltipContent>
        <p>This is helpful information</p>
      </TooltipContent>
    </Tooltip>
  </div>
  <Input placeholder="Placeholder text" />
</div>`,
    },
    
    // Input - Required + Tooltip
    {
      id: 'input-required-tooltip',
      category: 'input',
      name: 'Input - Required + Tooltip',
      variants: ['required', 'tooltip'],
      variantProperties: [
        { label: 'Variant', value: 'Default', type: 'text' },
        { label: 'Style', value: 'Default', type: 'text' },
        { label: 'Size', value: 'lg', type: 'text' },
        { label: 'State', value: 'Active', type: 'text' },
        { label: 'Tail Icon', value: true, type: 'boolean' },
        { label: 'Tail Icon', value: 'information-fill', type: 'icon' },
        { label: 'Placeholder', value: true, type: 'boolean' },
        { label: 'Label', value: true, type: 'boolean' },
        { label: 'Required', value: true, type: 'boolean' },
      ],
      component: (
        <div className="space-y-2" style={{ width: '238px' }}>
          <div className="flex items-center gap-2">
            <Label>
              라벨명 <span style={{ color: 'var(--destructive)' }}>*</span>
            </Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info size={14} style={{ color: 'var(--muted-foreground)', cursor: 'pointer' }} />
              </TooltipTrigger>
              <TooltipContent>
                <p>This field is required</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Input placeholder="Placeholder text" />
        </div>
      ),
      cssProperties: {
        'display': 'flex',
        'width': '238px',
        'padding': 'var(--none, 0)',
        'flex-direction': 'column',
        'align-items': 'flex-start',
        'gap': 'var(--8, 8px)',
      },
      modes: [
        { label: 'Stroke', value: 'Auto (Default)' },
        { label: 'Colors', value: 'Auto (Default)' },
        { label: 'Themes', value: 'Auto (Theme-1-Light)' },
        { label: 'Font Family', value: 'Auto (SUIT)' },
        { label: 'Spacing', value: 'Auto (Default)' },
        { label: 'Font Size', value: 'Auto (Desktop)' },
        { label: 'Radius', value: 'Auto (Default)' },
      ],
      colors: [
        { name: 'text/muted', value: 'var(--muted-foreground)' },
        { name: 'text/default', value: 'var(--foreground)' },
        { name: 'text/destructive', value: 'var(--destructive)' },
        { name: 'border/default', value: 'var(--border)' },
        { name: 'bg/input', value: 'var(--input-background)' },
        { name: 'icon/muted', value: 'var(--muted-foreground)' },
      ],
      tailwindClasses: ['flex', 'flex-col', 'items-start', 'gap-2', 'w-[238px]'],
      reactCode: `<div className="space-y-2" style={{ width: '238px' }}>
  <div className="flex items-center gap-2">
    <Label>
      라벨명 <span className="text-destructive">*</span>
    </Label>
    <Tooltip>
      <TooltipTrigger asChild>
        <Info size={14} className="text-muted-foreground cursor-pointer" />
      </TooltipTrigger>
      <TooltipContent>
        <p>This field is required</p>
      </TooltipContent>
    </Tooltip>
  </div>
  <Input placeholder="Placeholder text" />
</div>`,
    },
    
    // Input - Character Limit
    {
      id: 'input-char-limit',
      category: 'input',
      name: 'Input - Character Limit',
      variants: ['character-count'],
      component: (() => {
        const InputCharLimit = () => {
          const [value, setValue] = useState('');
          return (
            <div className="space-y-2" style={{ width: '238px' }}>
              <Label>라벨명</Label>
              <div className="relative">
                <Input 
                  placeholder="Placeholder text" 
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  maxLength={50}
                  style={{ paddingRight: '60px' }}
                />
                <span 
                  style={{ 
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: 'var(--size-sm)',
                    color: 'var(--muted-foreground)',
                    fontFamily: 'var(--font-family-suit)',
                    pointerEvents: 'none'
                  }}
                >
                  {value.length} / 50
                </span>
              </div>
            </div>
          );
        };
        return <InputCharLimit />;
      })(),
      cssProperties: {
        'display': 'flex',
        'width': '238px',
        'padding': 'var(--none, 0)',
        'flex-direction': 'column',
        'align-items': 'flex-start',
        'gap': 'var(--8, 8px)',
      },
      tailwindClasses: ['flex', 'flex-col', 'items-start', 'gap-2', 'w-[238px]'],
      reactCode: `const [value, setValue] = useState('');

<div className="space-y-2" style={{ width: '238px' }}>
  <Label>라벨명</Label>
  <div className="relative">
    <Input 
      placeholder="Placeholder text" 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      maxLength={50}
      className="pr-[60px]"
    />
    <span className="absolute right-3 top-1/2 -translate-y-1/2 size-sm text-muted-foreground pointer-events-none">
      {value.length} / 50
    </span>
  </div>
</div>`,
    },
    
    // Input - Multiple with Add Button
    {
      id: 'input-multiple',
      category: 'input',
      name: 'Input - Multiple',
      variants: ['multiple', 'addable'],
      component: (() => {
        const MultipleInputDemo = () => {
          const [inputs, setInputs] = useState<string[]>(['second']); 
          
          const addInput = () => {
            setInputs([...inputs, `value-${inputs.length + 1}`]);
          };
          
          const removeInput = (index: number) => {
            setInputs(inputs.filter((_, i) => i !== index));
          };
          
          return (
            <div className="space-y-2" style={{ width: '238px' }}>
              <Label>라벨명</Label>
              {/* First value - no delete button */}
              <Input placeholder="First value" />
              
              {/* Additional inputs with delete buttons */}
              {inputs.map((input, index) => (
                <div key={index} className="relative">
                  <Input 
                    placeholder={index === 0 ? "Second value" : `Value ${index + 2}`} 
                    style={{ paddingRight: '40px' }}
                  />
                  <button
                    onClick={() => removeInput(index)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    style={{
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
              
              <Button 
                style="soft"
                variant="iconOnly"
                size="md"
                className="w-full"
                onClick={addInput}
              >
                <Plus size={16} />
              </Button>
            </div>
          );
        };
        return <MultipleInputDemo />;
      })(),
      cssProperties: {
        'display': 'flex',
        'width': '238px',
        'padding': 'var(--none, 0)',
        'flex-direction': 'column',
        'align-items': 'flex-start',
        'gap': 'var(--8, 8px)',
      },
      tailwindClasses: ['flex', 'flex-col', 'items-start', 'gap-2', 'w-[238px]'],
      reactCode: `const [inputs, setInputs] = useState(['second']);

const addInput = () => {
  setInputs([...inputs, \`value-\${inputs.length + 1}\`]);
};

const removeInput = (index) => {
  setInputs(inputs.filter((_, i) => i !== index));
};

<div className="space-y-2" style={{ width: '238px' }}>
  <Label>라벨명</Label>
  <Input placeholder="First value" />
  
  {inputs.map((input, index) => (
    <div key={index} className="relative">
      <Input 
        placeholder={index === 0 ? "Second value" : \`Value \${index + 2}\`}
        className="pr-10"
      />
      <button
        onClick={() => removeInput(index)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      >
        <X size={16} />
      </button>
    </div>
  ))}
  
  <Button 
    style="soft" 
    variant="iconOnly"
    size="md"
    className="w-full"
    onClick={addInput}
  >
    <Plus size={16} />
  </Button>
</div>`,
    },
    
    // Textarea - Basic
    {
      id: 'textarea-basic',
      category: 'textarea',
      name: 'Text Area - Basic',
      variants: ['default', 'resizable'],
      component: (
        <div className="space-y-2" style={{ width: '238px' }}>
          <Label>라벨명</Label>
          <Textarea placeholder="Enter description..." rows={3} />
        </div>
      ),
      cssProperties: {
        'background-color': 'var(--input-background)',
        'border-color': 'var(--border)',
        'border-radius': 'var(--radius-input)',
        'font-size': 'var(--size-md)',
        'padding': '8px 12px',
        'min-height': '80px',
      },
      tailwindClasses: ['w-full', 'border', 'border-border', 'bg-input-background', 'px-3', 'py-2', 'min-h-20'],
      reactCode: `<div className="space-y-2">
  <Label>라벨명</Label>
  <Textarea placeholder="Enter description..." rows={3} />
</div>`,
    },
    
    // Textarea - With Character Limit
    {
      id: 'textarea-char-limit',
      category: 'textarea',
      name: 'Text Area - Character Limit',
      variants: ['character-count'],
      component: (
        <div className="space-y-2" style={{ width: '238px' }}>
          <Label>라벨명</Label>
          <div className="relative">
            <Textarea placeholder="Enter description..." rows={5} />
            <p style={{ 
              fontSize: 'var(--size-xs)', 
              color: 'var(--muted-foreground)',
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              pointerEvents: 'none'
            }}>
              0 / 500
            </p>
          </div>
        </div>
      ),
      cssProperties: {
        'background-color': 'var(--input-background)',
        'border-color': 'var(--border)',
        'counter-font-size': 'var(--size-xs)',
        'counter-color': 'var(--muted-foreground)',
      },
      tailwindClasses: ['w-full', 'border', 'border-border', 'bg-input-background'],
      reactCode: `<div className="space-y-2">
  <Label>라벨명</Label>
  <div className="relative">
    <Textarea placeholder="Enter description..." rows={5} maxLength={500} />
    <p className="size-xs text-muted-foreground absolute bottom-3 right-3 pointer-events-none">
      0 / 500
    </p>
  </div>
</div>`,
    },
    
    // Dropdown - Basic
    {
      id: 'dropdown-basic',
      category: 'dropdown',
      name: 'Dropdown - Basic',
      variants: ['default', 'disabled'],
      component: (
        <div className="space-y-2" style={{ width: '238px' }}>
          <Label>라벨명</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
              <SelectItem value="3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ),
      cssProperties: {
        'background-color': 'var(--input-background)',
        'border-color': 'var(--border)',
        'border-radius': 'var(--radius-input)',
        'font-size': 'var(--size-md)',
        'padding': '8px 12px',
      },
      tailwindClasses: ['w-full', 'border', 'border-border', 'bg-input-background'],
      reactCode: `<div className="space-y-2">
  <Label>라벨명</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Choose..." />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="1">Option 1</SelectItem>
      <SelectItem value="2">Option 2</SelectItem>
    </SelectContent>
  </Select>
</div>`,
    },
    
    // Toggle + Accordion
    {
      id: 'toggle-accordion',
      category: 'toggle-accordion',
      name: 'Toggle + Accordion',
      variants: ['collapsed', 'expanded'],
      component: (
        <div style={{ width: '270px' }}>
          <InputLabel />
        </div>
      ),
      cssProperties: {
        'width': '270px',
        'border-color': 'var(--border)',
        'border-radius': 'var(--radius)',
        'padding': '12px 16px',
        'toggle-color': 'var(--primary)',
        'icon-color': 'var(--muted-foreground)',
        'background-color': 'var(--background)',
      },
      tailwindClasses: ['w-[270px]', 'border', 'border-border', 'p-3', 'rounded-md'],
      reactCode: `<InputLabel />`,
    },
    
    // Label + Badge + Button
    {
      id: 'label-badge-button',
      category: 'etc',
      name: 'Label + Badge + Button',
      variants: ['default'],
      component: (() => {
        const LabelBadgeButtonDemo = () => {
          const [inputs, setInputs] = useState<string[]>([]);

          const addInput = () => {
            setInputs([...inputs, '']);
          };

          const removeInput = (index: number) => {
            setInputs(inputs.filter((_, i) => i !== index));
          };

          return (
            <div className="space-y-2" style={{ width: '238px' }}>
              <div className="flex items-center gap-2">
                <Label>라벨명</Label>
                <Badge
                  variant="default"
                  style={{
                    backgroundColor: 'var(--badge-blue-bg)',
                    color: 'var(--badge-blue-text)',
                    borderColor: 'var(--badge-blue-border)'
                  }}
                >
                  필수 정보
                </Badge>
              </div>

              {inputs.map((_, index) => (
                <div key={index} className="relative">
                  <Input
                    placeholder="텍스트를 입력해주세요."
                    style={{ paddingRight: '40px' }}
                  />
                  <button
                    onClick={() => removeInput(index)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    style={{
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}

              <Button
                style="soft"
                variant="iconOnly"
                size="md"
                className="w-full"
                onClick={addInput}
              >
                <Plus size={16} />
              </Button>
            </div>
          );
        };
        return <LabelBadgeButtonDemo />;
      })(),
      cssProperties: {
        'label-font-size': 'var(--size-sm)',
        'label-font-family': 'var(--font-family-suit)',
        'badge-background': 'var(--badge-blue-bg)',
        'badge-color': 'var(--badge-blue-text)',
        'badge-font-size': 'var(--size-xs)',
        'badge-padding': 'var(--spacing-none) var(--spacing-2)',
        'gap': 'var(--spacing-2)',
        'button-variant': 'soft',
        'button-width': '100%',
      },
      tailwindClasses: ['space-y-2', 'w-full', 'flex', 'items-center', 'gap-2'],
      reactCode: `const [inputs, setInputs] = useState([]);

const addInput = () => setInputs([...inputs, '']);
const removeInput = (index) => setInputs(inputs.filter((_, i) => i !== index));

<div className="space-y-2" style={{ width: '238px' }}>
  <div className="flex items-center gap-2">
    <Label>라벨명</Label>
    <Badge variant="default">필수 정보</Badge>
  </div>

  {inputs.map((_, index) => (
    <div key={index} className="relative">
      <Input placeholder="텍스트를 입력해주세요." className="pr-10" />
      <button
        onClick={() => removeInput(index)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      >
        <X size={16} />
      </button>
    </div>
  ))}

  <Button style="soft" variant="iconOnly" size="md" className="w-full" onClick={addInput}>
    <Plus size={16} />
  </Button>
</div>`,
    },
    
    // Button Variants
    ...generateButtonVariants()
  ];
}