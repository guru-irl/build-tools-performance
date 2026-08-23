import React from 'react';
const LABEL_34334 = 'component_34334';
export function Component34334({ value = 34334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34334, 'data-value': derived.doubled }, children);
}
export default Component34334;
