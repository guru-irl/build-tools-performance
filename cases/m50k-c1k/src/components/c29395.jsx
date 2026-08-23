import React from 'react';
const LABEL_29395 = 'component_29395';
export function Component29395({ value = 29395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29395, 'data-value': derived.doubled }, children);
}
export default Component29395;
