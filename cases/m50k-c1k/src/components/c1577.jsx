import React from 'react';
const LABEL_1577 = 'component_1577';
export function Component1577({ value = 1577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1577, 'data-value': derived.doubled }, children);
}
export default Component1577;
