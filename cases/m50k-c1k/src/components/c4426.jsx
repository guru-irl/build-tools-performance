import React from 'react';
const LABEL_4426 = 'component_4426';
export function Component4426({ value = 4426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4426, 'data-value': derived.doubled }, children);
}
export default Component4426;
