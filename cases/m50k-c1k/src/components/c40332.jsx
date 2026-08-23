import React from 'react';
const LABEL_40332 = 'component_40332';
export function Component40332({ value = 40332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40332, 'data-value': derived.doubled }, children);
}
export default Component40332;
