import React from 'react';
const LABEL_14155 = 'component_14155';
export function Component14155({ value = 14155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14155, 'data-value': derived.doubled }, children);
}
export default Component14155;
