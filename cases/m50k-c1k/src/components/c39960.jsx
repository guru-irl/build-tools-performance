import React from 'react';
const LABEL_39960 = 'component_39960';
export function Component39960({ value = 39960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39960, 'data-value': derived.doubled }, children);
}
export default Component39960;
