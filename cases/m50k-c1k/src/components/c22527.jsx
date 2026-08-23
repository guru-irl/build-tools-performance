import React from 'react';
const LABEL_22527 = 'component_22527';
export function Component22527({ value = 22527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22527, 'data-value': derived.doubled }, children);
}
export default Component22527;
