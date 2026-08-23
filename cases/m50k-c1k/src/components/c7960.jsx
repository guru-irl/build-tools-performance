import React from 'react';
const LABEL_7960 = 'component_7960';
export function Component7960({ value = 7960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7960, 'data-value': derived.doubled }, children);
}
export default Component7960;
