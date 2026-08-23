import React from 'react';
const LABEL_6883 = 'component_6883';
export function Component6883({ value = 6883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6883, 'data-value': derived.doubled }, children);
}
export default Component6883;
