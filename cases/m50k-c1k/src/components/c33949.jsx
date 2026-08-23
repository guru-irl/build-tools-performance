import React from 'react';
const LABEL_33949 = 'component_33949';
export function Component33949({ value = 33949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33949, 'data-value': derived.doubled }, children);
}
export default Component33949;
