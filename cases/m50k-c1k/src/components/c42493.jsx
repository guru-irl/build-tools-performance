import React from 'react';
const LABEL_42493 = 'component_42493';
export function Component42493({ value = 42493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42493, 'data-value': derived.doubled }, children);
}
export default Component42493;
