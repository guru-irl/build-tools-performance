import React from 'react';
const LABEL_35436 = 'component_35436';
export function Component35436({ value = 35436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35436, 'data-value': derived.doubled }, children);
}
export default Component35436;
