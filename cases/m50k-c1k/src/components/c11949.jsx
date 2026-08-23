import React from 'react';
const LABEL_11949 = 'component_11949';
export function Component11949({ value = 11949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11949, 'data-value': derived.doubled }, children);
}
export default Component11949;
