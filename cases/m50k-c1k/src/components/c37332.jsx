import React from 'react';
const LABEL_37332 = 'component_37332';
export function Component37332({ value = 37332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37332, 'data-value': derived.doubled }, children);
}
export default Component37332;
