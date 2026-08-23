import React from 'react';
const LABEL_5919 = 'component_5919';
export function Component5919({ value = 5919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5919, 'data-value': derived.doubled }, children);
}
export default Component5919;
