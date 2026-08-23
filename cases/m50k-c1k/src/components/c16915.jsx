import React from 'react';
const LABEL_16915 = 'component_16915';
export function Component16915({ value = 16915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16915, 'data-value': derived.doubled }, children);
}
export default Component16915;
