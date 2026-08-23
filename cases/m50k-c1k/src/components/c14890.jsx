import React from 'react';
const LABEL_14890 = 'component_14890';
export function Component14890({ value = 14890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14890, 'data-value': derived.doubled }, children);
}
export default Component14890;
