import React from 'react';
const LABEL_39783 = 'component_39783';
export function Component39783({ value = 39783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39783, 'data-value': derived.doubled }, children);
}
export default Component39783;
