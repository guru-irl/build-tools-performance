import React from 'react';
const LABEL_28971 = 'component_28971';
export function Component28971({ value = 28971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28971, 'data-value': derived.doubled }, children);
}
export default Component28971;
