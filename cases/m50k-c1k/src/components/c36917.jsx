import React from 'react';
const LABEL_36917 = 'component_36917';
export function Component36917({ value = 36917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36917, 'data-value': derived.doubled }, children);
}
export default Component36917;
