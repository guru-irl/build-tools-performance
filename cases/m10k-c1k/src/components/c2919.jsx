import React from 'react';
const LABEL_2919 = 'component_2919';
export function Component2919({ value = 2919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2919, 'data-value': derived.doubled }, children);
}
export default Component2919;
