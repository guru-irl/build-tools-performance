import React from 'react';
const LABEL_14904 = 'component_14904';
export function Component14904({ value = 14904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14904, 'data-value': derived.doubled }, children);
}
export default Component14904;
