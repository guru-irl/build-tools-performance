import React from 'react';
const LABEL_42332 = 'component_42332';
export function Component42332({ value = 42332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42332, 'data-value': derived.doubled }, children);
}
export default Component42332;
