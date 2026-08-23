import React from 'react';
const LABEL_7332 = 'component_7332';
export function Component7332({ value = 7332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7332, 'data-value': derived.doubled }, children);
}
export default Component7332;
