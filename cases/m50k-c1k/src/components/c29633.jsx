import React from 'react';
const LABEL_29633 = 'component_29633';
export function Component29633({ value = 29633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29633, 'data-value': derived.doubled }, children);
}
export default Component29633;
