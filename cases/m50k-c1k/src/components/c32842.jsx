import React from 'react';
const LABEL_32842 = 'component_32842';
export function Component32842({ value = 32842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32842, 'data-value': derived.doubled }, children);
}
export default Component32842;
