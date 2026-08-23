import React from 'react';
const LABEL_30895 = 'component_30895';
export function Component30895({ value = 30895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30895, 'data-value': derived.doubled }, children);
}
export default Component30895;
