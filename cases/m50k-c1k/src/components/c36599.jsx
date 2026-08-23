import React from 'react';
const LABEL_36599 = 'component_36599';
export function Component36599({ value = 36599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36599, 'data-value': derived.doubled }, children);
}
export default Component36599;
