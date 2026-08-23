import React from 'react';
const LABEL_21960 = 'component_21960';
export function Component21960({ value = 21960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21960, 'data-value': derived.doubled }, children);
}
export default Component21960;
