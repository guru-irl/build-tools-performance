import React from 'react';
const LABEL_23853 = 'component_23853';
export function Component23853({ value = 23853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23853, 'data-value': derived.doubled }, children);
}
export default Component23853;
