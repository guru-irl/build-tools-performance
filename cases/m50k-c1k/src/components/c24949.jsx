import React from 'react';
const LABEL_24949 = 'component_24949';
export function Component24949({ value = 24949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24949, 'data-value': derived.doubled }, children);
}
export default Component24949;
