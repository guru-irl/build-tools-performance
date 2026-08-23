import React from 'react';
const LABEL_21436 = 'component_21436';
export function Component21436({ value = 21436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21436, 'data-value': derived.doubled }, children);
}
export default Component21436;
