import React from 'react';
const LABEL_36 = 'component_36';
export function Component36({ value = 36, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36, 'data-value': derived.doubled }, children);
}
export default Component36;
