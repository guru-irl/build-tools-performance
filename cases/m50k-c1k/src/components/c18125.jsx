import React from 'react';
const LABEL_18125 = 'component_18125';
export function Component18125({ value = 18125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18125, 'data-value': derived.doubled }, children);
}
export default Component18125;
