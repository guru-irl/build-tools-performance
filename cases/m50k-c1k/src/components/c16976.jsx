import React from 'react';
const LABEL_16976 = 'component_16976';
export function Component16976({ value = 16976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16976, 'data-value': derived.doubled }, children);
}
export default Component16976;
