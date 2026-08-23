import React from 'react';
const LABEL_16949 = 'component_16949';
export function Component16949({ value = 16949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16949, 'data-value': derived.doubled }, children);
}
export default Component16949;
