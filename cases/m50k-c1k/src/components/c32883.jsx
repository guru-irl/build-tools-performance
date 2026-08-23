import React from 'react';
const LABEL_32883 = 'component_32883';
export function Component32883({ value = 32883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32883, 'data-value': derived.doubled }, children);
}
export default Component32883;
