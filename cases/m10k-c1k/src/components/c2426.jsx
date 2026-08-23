import React from 'react';
const LABEL_2426 = 'component_2426';
export function Component2426({ value = 2426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2426, 'data-value': derived.doubled }, children);
}
export default Component2426;
