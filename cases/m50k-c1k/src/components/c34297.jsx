import React from 'react';
const LABEL_34297 = 'component_34297';
export function Component34297({ value = 34297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34297, 'data-value': derived.doubled }, children);
}
export default Component34297;
