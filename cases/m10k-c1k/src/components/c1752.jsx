import React from 'react';
const LABEL_1752 = 'component_1752';
export function Component1752({ value = 1752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1752, 'data-value': derived.doubled }, children);
}
export default Component1752;
