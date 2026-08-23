import React from 'react';
const LABEL_28977 = 'component_28977';
export function Component28977({ value = 28977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28977, 'data-value': derived.doubled }, children);
}
export default Component28977;
