import React from 'react';
const LABEL_13668 = 'component_13668';
export function Component13668({ value = 13668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13668, 'data-value': derived.doubled }, children);
}
export default Component13668;
