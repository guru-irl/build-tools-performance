import React from 'react';
const LABEL_14490 = 'component_14490';
export function Component14490({ value = 14490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14490, 'data-value': derived.doubled }, children);
}
export default Component14490;
