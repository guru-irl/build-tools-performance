import React from 'react';
const LABEL_28724 = 'component_28724';
export function Component28724({ value = 28724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28724, 'data-value': derived.doubled }, children);
}
export default Component28724;
