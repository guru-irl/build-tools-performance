import React from 'react';
const LABEL_35666 = 'component_35666';
export function Component35666({ value = 35666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35666, 'data-value': derived.doubled }, children);
}
export default Component35666;
