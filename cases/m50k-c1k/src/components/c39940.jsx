import React from 'react';
const LABEL_39940 = 'component_39940';
export function Component39940({ value = 39940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39940, 'data-value': derived.doubled }, children);
}
export default Component39940;
