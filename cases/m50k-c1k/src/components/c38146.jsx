import React from 'react';
const LABEL_38146 = 'component_38146';
export function Component38146({ value = 38146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38146, 'data-value': derived.doubled }, children);
}
export default Component38146;
