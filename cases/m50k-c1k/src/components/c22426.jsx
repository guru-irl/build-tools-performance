import React from 'react';
const LABEL_22426 = 'component_22426';
export function Component22426({ value = 22426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22426, 'data-value': derived.doubled }, children);
}
export default Component22426;
