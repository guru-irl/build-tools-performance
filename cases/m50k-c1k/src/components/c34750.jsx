import React from 'react';
const LABEL_34750 = 'component_34750';
export function Component34750({ value = 34750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34750, 'data-value': derived.doubled }, children);
}
export default Component34750;
