import React from 'react';
const LABEL_20949 = 'component_20949';
export function Component20949({ value = 20949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20949, 'data-value': derived.doubled }, children);
}
export default Component20949;
