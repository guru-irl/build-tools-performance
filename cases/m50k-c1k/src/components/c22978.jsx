import React from 'react';
const LABEL_22978 = 'component_22978';
export function Component22978({ value = 22978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22978, 'data-value': derived.doubled }, children);
}
export default Component22978;
