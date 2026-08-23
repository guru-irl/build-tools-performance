import React from 'react';
const LABEL_18990 = 'component_18990';
export function Component18990({ value = 18990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18990, 'data-value': derived.doubled }, children);
}
export default Component18990;
