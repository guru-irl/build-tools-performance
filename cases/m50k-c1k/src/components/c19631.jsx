import React from 'react';
const LABEL_19631 = 'component_19631';
export function Component19631({ value = 19631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19631, 'data-value': derived.doubled }, children);
}
export default Component19631;
