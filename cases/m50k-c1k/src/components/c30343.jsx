import React from 'react';
const LABEL_30343 = 'component_30343';
export function Component30343({ value = 30343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30343, 'data-value': derived.doubled }, children);
}
export default Component30343;
