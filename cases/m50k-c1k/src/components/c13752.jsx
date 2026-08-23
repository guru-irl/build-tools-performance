import React from 'react';
const LABEL_13752 = 'component_13752';
export function Component13752({ value = 13752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13752, 'data-value': derived.doubled }, children);
}
export default Component13752;
