import React from 'react';
const LABEL_8971 = 'component_8971';
export function Component8971({ value = 8971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8971, 'data-value': derived.doubled }, children);
}
export default Component8971;
