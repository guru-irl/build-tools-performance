import React from 'react';
const LABEL_6949 = 'component_6949';
export function Component6949({ value = 6949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6949, 'data-value': derived.doubled }, children);
}
export default Component6949;
