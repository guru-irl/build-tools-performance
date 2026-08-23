import React from 'react';
const LABEL_19274 = 'component_19274';
export function Component19274({ value = 19274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19274, 'data-value': derived.doubled }, children);
}
export default Component19274;
