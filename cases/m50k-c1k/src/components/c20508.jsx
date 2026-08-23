import React from 'react';
const LABEL_20508 = 'component_20508';
export function Component20508({ value = 20508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20508, 'data-value': derived.doubled }, children);
}
export default Component20508;
