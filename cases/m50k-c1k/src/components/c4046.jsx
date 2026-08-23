import React from 'react';
const LABEL_4046 = 'component_4046';
export function Component4046({ value = 4046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4046, 'data-value': derived.doubled }, children);
}
export default Component4046;
