import React from 'react';
const LABEL_15436 = 'component_15436';
export function Component15436({ value = 15436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15436, 'data-value': derived.doubled }, children);
}
export default Component15436;
