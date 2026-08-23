import React from 'react';
const LABEL_13436 = 'component_13436';
export function Component13436({ value = 13436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13436, 'data-value': derived.doubled }, children);
}
export default Component13436;
