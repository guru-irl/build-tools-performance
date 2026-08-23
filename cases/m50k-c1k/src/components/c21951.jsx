import React from 'react';
const LABEL_21951 = 'component_21951';
export function Component21951({ value = 21951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21951, 'data-value': derived.doubled }, children);
}
export default Component21951;
