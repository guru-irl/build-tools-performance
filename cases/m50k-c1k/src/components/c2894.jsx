import React from 'react';
const LABEL_2894 = 'component_2894';
export function Component2894({ value = 2894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2894, 'data-value': derived.doubled }, children);
}
export default Component2894;
