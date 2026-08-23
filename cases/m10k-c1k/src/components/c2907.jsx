import React from 'react';
const LABEL_2907 = 'component_2907';
export function Component2907({ value = 2907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2907, 'data-value': derived.doubled }, children);
}
export default Component2907;
