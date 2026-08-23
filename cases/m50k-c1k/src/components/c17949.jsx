import React from 'react';
const LABEL_17949 = 'component_17949';
export function Component17949({ value = 17949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17949, 'data-value': derived.doubled }, children);
}
export default Component17949;
