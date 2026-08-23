import React from 'react';
const LABEL_21635 = 'component_21635';
export function Component21635({ value = 21635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21635, 'data-value': derived.doubled }, children);
}
export default Component21635;
