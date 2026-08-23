import React from 'react';
const LABEL_16971 = 'component_16971';
export function Component16971({ value = 16971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16971, 'data-value': derived.doubled }, children);
}
export default Component16971;
