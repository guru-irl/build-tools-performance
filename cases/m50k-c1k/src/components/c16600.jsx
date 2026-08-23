import React from 'react';
const LABEL_16600 = 'component_16600';
export function Component16600({ value = 16600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16600, 'data-value': derived.doubled }, children);
}
export default Component16600;
