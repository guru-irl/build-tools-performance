import React from 'react';
const LABEL_33436 = 'component_33436';
export function Component33436({ value = 33436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33436, 'data-value': derived.doubled }, children);
}
export default Component33436;
