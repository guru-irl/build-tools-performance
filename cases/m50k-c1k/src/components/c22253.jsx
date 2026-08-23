import React from 'react';
const LABEL_22253 = 'component_22253';
export function Component22253({ value = 22253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22253, 'data-value': derived.doubled }, children);
}
export default Component22253;
