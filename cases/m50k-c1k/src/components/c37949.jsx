import React from 'react';
const LABEL_37949 = 'component_37949';
export function Component37949({ value = 37949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37949, 'data-value': derived.doubled }, children);
}
export default Component37949;
