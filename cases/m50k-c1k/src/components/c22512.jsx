import React from 'react';
const LABEL_22512 = 'component_22512';
export function Component22512({ value = 22512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22512, 'data-value': derived.doubled }, children);
}
export default Component22512;
