import React from 'react';
const LABEL_26545 = 'component_26545';
export function Component26545({ value = 26545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26545, 'data-value': derived.doubled }, children);
}
export default Component26545;
