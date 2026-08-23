import React from 'react';
const LABEL_29819 = 'component_29819';
export function Component29819({ value = 29819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29819, 'data-value': derived.doubled }, children);
}
export default Component29819;
