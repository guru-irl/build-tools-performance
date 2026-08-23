import React from 'react';
const LABEL_5436 = 'component_5436';
export function Component5436({ value = 5436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5436, 'data-value': derived.doubled }, children);
}
export default Component5436;
