import React from 'react';
const LABEL_8883 = 'component_8883';
export function Component8883({ value = 8883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8883, 'data-value': derived.doubled }, children);
}
export default Component8883;
