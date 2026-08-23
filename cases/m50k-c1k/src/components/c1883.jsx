import React from 'react';
const LABEL_1883 = 'component_1883';
export function Component1883({ value = 1883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1883, 'data-value': derived.doubled }, children);
}
export default Component1883;
