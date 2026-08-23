import React from 'react';
const LABEL_9915 = 'component_9915';
export function Component9915({ value = 9915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9915, 'data-value': derived.doubled }, children);
}
export default Component9915;
