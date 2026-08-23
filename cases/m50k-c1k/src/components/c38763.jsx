import React from 'react';
const LABEL_38763 = 'component_38763';
export function Component38763({ value = 38763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38763, 'data-value': derived.doubled }, children);
}
export default Component38763;
