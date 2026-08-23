import React from 'react';
const LABEL_24379 = 'component_24379';
export function Component24379({ value = 24379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24379, 'data-value': derived.doubled }, children);
}
export default Component24379;
