import React from 'react';
const LABEL_32332 = 'component_32332';
export function Component32332({ value = 32332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32332, 'data-value': derived.doubled }, children);
}
export default Component32332;
