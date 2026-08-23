import React from 'react';
const LABEL_1949 = 'component_1949';
export function Component1949({ value = 1949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1949, 'data-value': derived.doubled }, children);
}
export default Component1949;
