import React from 'react';
const LABEL_6960 = 'component_6960';
export function Component6960({ value = 6960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6960, 'data-value': derived.doubled }, children);
}
export default Component6960;
