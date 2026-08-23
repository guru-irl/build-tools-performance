import React from 'react';
const LABEL_16849 = 'component_16849';
export function Component16849({ value = 16849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16849, 'data-value': derived.doubled }, children);
}
export default Component16849;
