import React from 'react';
const LABEL_38285 = 'component_38285';
export function Component38285({ value = 38285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38285, 'data-value': derived.doubled }, children);
}
export default Component38285;
