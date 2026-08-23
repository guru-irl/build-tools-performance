import React from 'react';
const LABEL_39421 = 'component_39421';
export function Component39421({ value = 39421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39421, 'data-value': derived.doubled }, children);
}
export default Component39421;
