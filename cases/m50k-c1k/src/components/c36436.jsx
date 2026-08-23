import React from 'react';
const LABEL_36436 = 'component_36436';
export function Component36436({ value = 36436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36436, 'data-value': derived.doubled }, children);
}
export default Component36436;
