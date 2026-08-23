import React from 'react';
const LABEL_1919 = 'component_1919';
export function Component1919({ value = 1919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1919, 'data-value': derived.doubled }, children);
}
export default Component1919;
