import React from 'react';
const LABEL_39699 = 'component_39699';
export function Component39699({ value = 39699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39699, 'data-value': derived.doubled }, children);
}
export default Component39699;
