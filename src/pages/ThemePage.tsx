import React from 'react';
import { useThemeStore } from '../state/themeStore';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { toast } from '../components/ui/Toast';

export function ThemePage() {
  const { primary, secondary, accent, setTheme, resetTheme } = useThemeStore();
  
  const [localTheme, setLocalTheme] = React.useState({
    primary,
    secondary,
    accent
  });

  const handleSave = () => {
    setTheme(localTheme);
    toast.success('Theme saved successfully');
  };

  const handleReset = () => {
    resetTheme();
    const newTheme = useThemeStore.getState();
    setLocalTheme({
      primary: newTheme.primary,
      secondary: newTheme.secondary,
      accent: newTheme.accent
    });
    toast.info('Theme reset to defaults');
  };

  return (
    <div className="page">
      <Card title="Theme Settings">
        <div className="stack">
          <div className="stack">
            <label>Primary Color</label>
            <div className="row">
              <Input 
                type="color" 
                value={localTheme.primary} 
                onChange={(e) => setLocalTheme(prev => ({ ...prev, primary: e.target.value }))}
                style={{ width: '50px', padding: '2px', height: '40px' }}
              />
              <Input 
                type="text" 
                value={localTheme.primary} 
                onChange={(e) => setLocalTheme(prev => ({ ...prev, primary: e.target.value }))}
              />
            </div>
          </div>

          <div className="stack">
            <label>Secondary Color</label>
            <div className="row">
              <Input 
                type="color" 
                value={localTheme.secondary} 
                onChange={(e) => setLocalTheme(prev => ({ ...prev, secondary: e.target.value }))}
                style={{ width: '50px', padding: '2px', height: '40px' }}
              />
              <Input 
                type="text" 
                value={localTheme.secondary} 
                onChange={(e) => setLocalTheme(prev => ({ ...prev, secondary: e.target.value }))}
              />
            </div>
          </div>

          <div className="stack">
            <label>Accent Color</label>
            <div className="row">
              <Input 
                type="color" 
                value={localTheme.accent} 
                onChange={(e) => setLocalTheme(prev => ({ ...prev, accent: e.target.value }))}
                style={{ width: '50px', padding: '2px', height: '40px' }}
              />
              <Input 
                type="text" 
                value={localTheme.accent} 
                onChange={(e) => setLocalTheme(prev => ({ ...prev, accent: e.target.value }))}
              />
            </div>
          </div>

          <div className="row" style={{ marginTop: '12px' }}>
            <Button onClick={handleSave} variant="primary">Save Theme</Button>
            <Button onClick={handleReset} variant="secondary">Reset to Defaults</Button>
          </div>
        </div>
      </Card>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Preview</h3>
        <div className="row">
          <Button style={{ backgroundColor: 'var(--c-primary)', color: 'white', border: 'none' }}>Primary</Button>
          <Button style={{ backgroundColor: 'var(--c-secondary)', color: 'white', border: 'none' }}>Secondary</Button>
          <Button style={{ backgroundColor: 'var(--c-accent)', color: 'white', border: 'none' }}>Accent</Button>
        </div>
      </div>
    </div>
  );
}
