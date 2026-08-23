import React from 'react';
const LABEL_40254 = 'component_40254';
export function Component40254({ value = 40254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40254, 'data-value': derived.doubled }, children);
}
export default Component40254;
