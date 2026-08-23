import React from 'react';
const LABEL_1408 = 'component_1408';
export function Component1408({ value = 1408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1408, 'data-value': derived.doubled }, children);
}
export default Component1408;
