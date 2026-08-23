import React from 'react';
const LABEL_19092 = 'component_19092';
export function Component19092({ value = 19092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19092, 'data-value': derived.doubled }, children);
}
export default Component19092;
