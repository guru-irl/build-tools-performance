import React from 'react';
const LABEL_38158 = 'component_38158';
export function Component38158({ value = 38158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38158, 'data-value': derived.doubled }, children);
}
export default Component38158;
