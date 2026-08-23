import React from 'react';
const LABEL_2128 = 'component_2128';
export function Component2128({ value = 2128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2128, 'data-value': derived.doubled }, children);
}
export default Component2128;
