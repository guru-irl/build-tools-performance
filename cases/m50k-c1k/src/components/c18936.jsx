import React from 'react';
const LABEL_18936 = 'component_18936';
export function Component18936({ value = 18936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18936, 'data-value': derived.doubled }, children);
}
export default Component18936;
