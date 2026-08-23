import React from 'react';
const LABEL_13883 = 'component_13883';
export function Component13883({ value = 13883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13883, 'data-value': derived.doubled }, children);
}
export default Component13883;
