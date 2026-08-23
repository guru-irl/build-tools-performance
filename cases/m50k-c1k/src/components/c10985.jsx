import React from 'react';
const LABEL_10985 = 'component_10985';
export function Component10985({ value = 10985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10985, 'data-value': derived.doubled }, children);
}
export default Component10985;
