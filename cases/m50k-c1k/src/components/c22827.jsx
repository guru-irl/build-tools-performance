import React from 'react';
const LABEL_22827 = 'component_22827';
export function Component22827({ value = 22827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22827, 'data-value': derived.doubled }, children);
}
export default Component22827;
