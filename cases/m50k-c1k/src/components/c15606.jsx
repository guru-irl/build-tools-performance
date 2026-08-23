import React from 'react';
const LABEL_15606 = 'component_15606';
export function Component15606({ value = 15606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15606, 'data-value': derived.doubled }, children);
}
export default Component15606;
