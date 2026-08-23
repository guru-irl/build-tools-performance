import React from 'react';
const LABEL_16960 = 'component_16960';
export function Component16960({ value = 16960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16960, 'data-value': derived.doubled }, children);
}
export default Component16960;
