import React from 'react';
const LABEL_32960 = 'component_32960';
export function Component32960({ value = 32960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32960, 'data-value': derived.doubled }, children);
}
export default Component32960;
