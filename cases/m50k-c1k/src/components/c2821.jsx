import React from 'react';
const LABEL_2821 = 'component_2821';
export function Component2821({ value = 2821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2821, 'data-value': derived.doubled }, children);
}
export default Component2821;
