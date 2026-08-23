import React from 'react';
const LABEL_25915 = 'component_25915';
export function Component25915({ value = 25915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25915, 'data-value': derived.doubled }, children);
}
export default Component25915;
