import React from 'react';
const LABEL_24976 = 'component_24976';
export function Component24976({ value = 24976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24976, 'data-value': derived.doubled }, children);
}
export default Component24976;
