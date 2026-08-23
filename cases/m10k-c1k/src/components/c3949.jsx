import React from 'react';
const LABEL_3949 = 'component_3949';
export function Component3949({ value = 3949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3949, 'data-value': derived.doubled }, children);
}
export default Component3949;
