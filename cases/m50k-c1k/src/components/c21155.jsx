import React from 'react';
const LABEL_21155 = 'component_21155';
export function Component21155({ value = 21155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21155, 'data-value': derived.doubled }, children);
}
export default Component21155;
