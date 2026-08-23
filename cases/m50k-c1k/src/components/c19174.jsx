import React from 'react';
const LABEL_19174 = 'component_19174';
export function Component19174({ value = 19174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19174, 'data-value': derived.doubled }, children);
}
export default Component19174;
