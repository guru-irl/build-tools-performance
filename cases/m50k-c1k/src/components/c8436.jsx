import React from 'react';
const LABEL_8436 = 'component_8436';
export function Component8436({ value = 8436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8436, 'data-value': derived.doubled }, children);
}
export default Component8436;
