import React from 'react';
const LABEL_36949 = 'component_36949';
export function Component36949({ value = 36949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36949, 'data-value': derived.doubled }, children);
}
export default Component36949;
