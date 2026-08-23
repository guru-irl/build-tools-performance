import React from 'react';
const LABEL_43949 = 'component_43949';
export function Component43949({ value = 43949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43949, 'data-value': derived.doubled }, children);
}
export default Component43949;
