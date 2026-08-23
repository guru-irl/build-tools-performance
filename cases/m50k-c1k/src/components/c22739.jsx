import React from 'react';
const LABEL_22739 = 'component_22739';
export function Component22739({ value = 22739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22739, 'data-value': derived.doubled }, children);
}
export default Component22739;
