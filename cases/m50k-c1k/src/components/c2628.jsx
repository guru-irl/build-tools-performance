import React from 'react';
const LABEL_2628 = 'component_2628';
export function Component2628({ value = 2628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2628, 'data-value': derived.doubled }, children);
}
export default Component2628;
