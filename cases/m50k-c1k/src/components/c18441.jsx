import React from 'react';
const LABEL_18441 = 'component_18441';
export function Component18441({ value = 18441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18441, 'data-value': derived.doubled }, children);
}
export default Component18441;
