import React from 'react';
const LABEL_2436 = 'component_2436';
export function Component2436({ value = 2436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2436, 'data-value': derived.doubled }, children);
}
export default Component2436;
