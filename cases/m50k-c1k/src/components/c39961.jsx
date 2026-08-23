import React from 'react';
const LABEL_39961 = 'component_39961';
export function Component39961({ value = 39961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39961, 'data-value': derived.doubled }, children);
}
export default Component39961;
