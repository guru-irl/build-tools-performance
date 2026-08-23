import React from 'react';
const LABEL_13155 = 'component_13155';
export function Component13155({ value = 13155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13155, 'data-value': derived.doubled }, children);
}
export default Component13155;
