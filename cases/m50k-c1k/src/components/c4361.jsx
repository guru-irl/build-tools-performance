import React from 'react';
const LABEL_4361 = 'component_4361';
export function Component4361({ value = 4361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4361, 'data-value': derived.doubled }, children);
}
export default Component4361;
