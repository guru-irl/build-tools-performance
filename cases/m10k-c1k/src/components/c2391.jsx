import React from 'react';
const LABEL_2391 = 'component_2391';
export function Component2391({ value = 2391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2391, 'data-value': derived.doubled }, children);
}
export default Component2391;
