import React from 'react';
const LABEL_35421 = 'component_35421';
export function Component35421({ value = 35421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35421, 'data-value': derived.doubled }, children);
}
export default Component35421;
