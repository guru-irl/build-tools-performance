import React from 'react';
const LABEL_13949 = 'component_13949';
export function Component13949({ value = 13949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13949, 'data-value': derived.doubled }, children);
}
export default Component13949;
