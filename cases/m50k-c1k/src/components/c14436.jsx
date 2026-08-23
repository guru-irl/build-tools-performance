import React from 'react';
const LABEL_14436 = 'component_14436';
export function Component14436({ value = 14436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14436, 'data-value': derived.doubled }, children);
}
export default Component14436;
