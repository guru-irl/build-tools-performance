import React from 'react';
const LABEL_11509 = 'component_11509';
export function Component11509({ value = 11509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11509, 'data-value': derived.doubled }, children);
}
export default Component11509;
