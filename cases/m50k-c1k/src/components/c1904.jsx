import React from 'react';
const LABEL_1904 = 'component_1904';
export function Component1904({ value = 1904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1904, 'data-value': derived.doubled }, children);
}
export default Component1904;
