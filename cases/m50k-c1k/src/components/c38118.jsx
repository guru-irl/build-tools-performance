import React from 'react';
const LABEL_38118 = 'component_38118';
export function Component38118({ value = 38118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38118, 'data-value': derived.doubled }, children);
}
export default Component38118;
