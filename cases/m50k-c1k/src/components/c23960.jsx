import React from 'react';
const LABEL_23960 = 'component_23960';
export function Component23960({ value = 23960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23960, 'data-value': derived.doubled }, children);
}
export default Component23960;
