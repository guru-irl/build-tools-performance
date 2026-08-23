import React from 'react';
const LABEL_38724 = 'component_38724';
export function Component38724({ value = 38724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38724, 'data-value': derived.doubled }, children);
}
export default Component38724;
