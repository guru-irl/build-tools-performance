import React from 'react';
const LABEL_31724 = 'component_31724';
export function Component31724({ value = 31724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31724, 'data-value': derived.doubled }, children);
}
export default Component31724;
