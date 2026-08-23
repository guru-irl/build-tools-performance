import React from 'react';
const LABEL_39384 = 'component_39384';
export function Component39384({ value = 39384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39384, 'data-value': derived.doubled }, children);
}
export default Component39384;
