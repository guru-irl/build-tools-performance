import React from 'react';
const LABEL_1104 = 'component_1104';
export function Component1104({ value = 1104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1104, 'data-value': derived.doubled }, children);
}
export default Component1104;
