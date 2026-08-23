import React from 'react';
const LABEL_24979 = 'component_24979';
export function Component24979({ value = 24979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24979, 'data-value': derived.doubled }, children);
}
export default Component24979;
