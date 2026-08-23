import React from 'react';
const LABEL_6361 = 'component_6361';
export function Component6361({ value = 6361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6361, 'data-value': derived.doubled }, children);
}
export default Component6361;
