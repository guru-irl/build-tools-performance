import React from 'react';
const LABEL_10436 = 'component_10436';
export function Component10436({ value = 10436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10436, 'data-value': derived.doubled }, children);
}
export default Component10436;
