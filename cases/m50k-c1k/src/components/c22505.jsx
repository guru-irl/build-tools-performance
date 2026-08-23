import React from 'react';
const LABEL_22505 = 'component_22505';
export function Component22505({ value = 22505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22505, 'data-value': derived.doubled }, children);
}
export default Component22505;
