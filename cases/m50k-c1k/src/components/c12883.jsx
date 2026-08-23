import React from 'react';
const LABEL_12883 = 'component_12883';
export function Component12883({ value = 12883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12883, 'data-value': derived.doubled }, children);
}
export default Component12883;
