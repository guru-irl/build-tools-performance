import React from 'react';
const LABEL_16901 = 'component_16901';
export function Component16901({ value = 16901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16901, 'data-value': derived.doubled }, children);
}
export default Component16901;
