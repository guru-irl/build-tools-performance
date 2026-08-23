import React from 'react';
const LABEL_37915 = 'component_37915';
export function Component37915({ value = 37915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37915, 'data-value': derived.doubled }, children);
}
export default Component37915;
