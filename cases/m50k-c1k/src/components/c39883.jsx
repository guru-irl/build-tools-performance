import React from 'react';
const LABEL_39883 = 'component_39883';
export function Component39883({ value = 39883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39883, 'data-value': derived.doubled }, children);
}
export default Component39883;
