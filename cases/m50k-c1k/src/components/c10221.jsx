import React from 'react';
const LABEL_10221 = 'component_10221';
export function Component10221({ value = 10221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10221, 'data-value': derived.doubled }, children);
}
export default Component10221;
