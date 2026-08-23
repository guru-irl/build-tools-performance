import React from 'react';
const LABEL_36960 = 'component_36960';
export function Component36960({ value = 36960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36960, 'data-value': derived.doubled }, children);
}
export default Component36960;
