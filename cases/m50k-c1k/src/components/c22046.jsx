import React from 'react';
const LABEL_22046 = 'component_22046';
export function Component22046({ value = 22046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22046, 'data-value': derived.doubled }, children);
}
export default Component22046;
