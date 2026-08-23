import React from 'react';
const LABEL_33752 = 'component_33752';
export function Component33752({ value = 33752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33752, 'data-value': derived.doubled }, children);
}
export default Component33752;
