import React from 'react';
const LABEL_36999 = 'component_36999';
export function Component36999({ value = 36999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36999, 'data-value': derived.doubled }, children);
}
export default Component36999;
