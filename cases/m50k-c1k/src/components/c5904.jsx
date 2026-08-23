import React from 'react';
const LABEL_5904 = 'component_5904';
export function Component5904({ value = 5904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5904, 'data-value': derived.doubled }, children);
}
export default Component5904;
