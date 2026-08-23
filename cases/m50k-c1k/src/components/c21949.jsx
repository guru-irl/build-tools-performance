import React from 'react';
const LABEL_21949 = 'component_21949';
export function Component21949({ value = 21949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21949, 'data-value': derived.doubled }, children);
}
export default Component21949;
