import React from 'react';
const LABEL_36646 = 'component_36646';
export function Component36646({ value = 36646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36646, 'data-value': derived.doubled }, children);
}
export default Component36646;
