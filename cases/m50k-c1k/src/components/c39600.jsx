import React from 'react';
const LABEL_39600 = 'component_39600';
export function Component39600({ value = 39600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39600, 'data-value': derived.doubled }, children);
}
export default Component39600;
