import React from 'react';
const LABEL_1115 = 'component_1115';
export function Component1115({ value = 1115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1115, 'data-value': derived.doubled }, children);
}
export default Component1115;
