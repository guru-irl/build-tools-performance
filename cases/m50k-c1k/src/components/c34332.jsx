import React from 'react';
const LABEL_34332 = 'component_34332';
export function Component34332({ value = 34332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34332, 'data-value': derived.doubled }, children);
}
export default Component34332;
