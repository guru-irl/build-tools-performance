import React from 'react';
const LABEL_10812 = 'component_10812';
export function Component10812({ value = 10812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10812, 'data-value': derived.doubled }, children);
}
export default Component10812;
