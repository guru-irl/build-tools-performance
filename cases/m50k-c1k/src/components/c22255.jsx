import React from 'react';
const LABEL_22255 = 'component_22255';
export function Component22255({ value = 22255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22255, 'data-value': derived.doubled }, children);
}
export default Component22255;
