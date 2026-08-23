import React from 'react';
const LABEL_2754 = 'component_2754';
export function Component2754({ value = 2754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2754, 'data-value': derived.doubled }, children);
}
export default Component2754;
