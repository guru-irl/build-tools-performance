import React from 'react';
const LABEL_14653 = 'component_14653';
export function Component14653({ value = 14653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14653, 'data-value': derived.doubled }, children);
}
export default Component14653;
