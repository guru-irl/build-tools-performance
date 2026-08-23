import React from 'react';
const LABEL_32949 = 'component_32949';
export function Component32949({ value = 32949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32949, 'data-value': derived.doubled }, children);
}
export default Component32949;
