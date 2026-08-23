import React from 'react';
const LABEL_22913 = 'component_22913';
export function Component22913({ value = 22913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22913, 'data-value': derived.doubled }, children);
}
export default Component22913;
