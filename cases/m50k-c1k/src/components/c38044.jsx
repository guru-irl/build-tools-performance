import React from 'react';
const LABEL_38044 = 'component_38044';
export function Component38044({ value = 38044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38044, 'data-value': derived.doubled }, children);
}
export default Component38044;
