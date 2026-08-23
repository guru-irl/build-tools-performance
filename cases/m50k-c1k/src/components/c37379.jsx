import React from 'react';
const LABEL_37379 = 'component_37379';
export function Component37379({ value = 37379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37379, 'data-value': derived.doubled }, children);
}
export default Component37379;
