import React from 'react';
const LABEL_25961 = 'component_25961';
export function Component25961({ value = 25961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25961, 'data-value': derived.doubled }, children);
}
export default Component25961;
