import React from 'react';
const LABEL_40577 = 'component_40577';
export function Component40577({ value = 40577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40577, 'data-value': derived.doubled }, children);
}
export default Component40577;
