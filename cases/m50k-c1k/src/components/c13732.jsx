import React from 'react';
const LABEL_13732 = 'component_13732';
export function Component13732({ value = 13732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13732, 'data-value': derived.doubled }, children);
}
export default Component13732;
