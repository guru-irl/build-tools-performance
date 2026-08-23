import React from 'react';
const LABEL_34097 = 'component_34097';
export function Component34097({ value = 34097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34097, 'data-value': derived.doubled }, children);
}
export default Component34097;
