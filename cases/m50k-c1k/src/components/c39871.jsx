import React from 'react';
const LABEL_39871 = 'component_39871';
export function Component39871({ value = 39871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39871, 'data-value': derived.doubled }, children);
}
export default Component39871;
