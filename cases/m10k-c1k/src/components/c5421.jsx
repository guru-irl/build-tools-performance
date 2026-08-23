import React from 'react';
const LABEL_5421 = 'component_5421';
export function Component5421({ value = 5421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5421, 'data-value': derived.doubled }, children);
}
export default Component5421;
