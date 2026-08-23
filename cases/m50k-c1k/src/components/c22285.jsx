import React from 'react';
const LABEL_22285 = 'component_22285';
export function Component22285({ value = 22285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22285, 'data-value': derived.doubled }, children);
}
export default Component22285;
