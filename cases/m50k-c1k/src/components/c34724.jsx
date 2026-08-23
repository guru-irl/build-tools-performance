import React from 'react';
const LABEL_34724 = 'component_34724';
export function Component34724({ value = 34724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34724, 'data-value': derived.doubled }, children);
}
export default Component34724;
