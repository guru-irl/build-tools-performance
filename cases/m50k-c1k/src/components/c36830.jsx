import React from 'react';
const LABEL_36830 = 'component_36830';
export function Component36830({ value = 36830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36830, 'data-value': derived.doubled }, children);
}
export default Component36830;
