import React from 'react';
const LABEL_24960 = 'component_24960';
export function Component24960({ value = 24960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24960, 'data-value': derived.doubled }, children);
}
export default Component24960;
