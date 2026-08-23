import React from 'react';
const LABEL_33086 = 'component_33086';
export function Component33086({ value = 33086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33086, 'data-value': derived.doubled }, children);
}
export default Component33086;
