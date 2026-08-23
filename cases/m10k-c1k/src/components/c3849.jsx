import React from 'react';
const LABEL_3849 = 'component_3849';
export function Component3849({ value = 3849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3849, 'data-value': derived.doubled }, children);
}
export default Component3849;
