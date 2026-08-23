import React from 'react';
const LABEL_32421 = 'component_32421';
export function Component32421({ value = 32421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32421, 'data-value': derived.doubled }, children);
}
export default Component32421;
