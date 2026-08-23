import React from 'react';
const LABEL_9399 = 'component_9399';
export function Component9399({ value = 9399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9399, 'data-value': derived.doubled }, children);
}
export default Component9399;
