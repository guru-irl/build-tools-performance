import React from 'react';
const LABEL_31821 = 'component_31821';
export function Component31821({ value = 31821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31821, 'data-value': derived.doubled }, children);
}
export default Component31821;
