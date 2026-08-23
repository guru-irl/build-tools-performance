import React from 'react';
const LABEL_46646 = 'component_46646';
export function Component46646({ value = 46646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46646, 'data-value': derived.doubled }, children);
}
export default Component46646;
