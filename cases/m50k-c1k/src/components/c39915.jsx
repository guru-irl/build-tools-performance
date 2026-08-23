import React from 'react';
const LABEL_39915 = 'component_39915';
export function Component39915({ value = 39915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39915, 'data-value': derived.doubled }, children);
}
export default Component39915;
