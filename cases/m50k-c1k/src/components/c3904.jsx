import React from 'react';
const LABEL_3904 = 'component_3904';
export function Component3904({ value = 3904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3904, 'data-value': derived.doubled }, children);
}
export default Component3904;
