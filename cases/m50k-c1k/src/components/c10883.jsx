import React from 'react';
const LABEL_10883 = 'component_10883';
export function Component10883({ value = 10883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10883, 'data-value': derived.doubled }, children);
}
export default Component10883;
