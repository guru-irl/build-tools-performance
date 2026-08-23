import React from 'react';
const LABEL_39945 = 'component_39945';
export function Component39945({ value = 39945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39945, 'data-value': derived.doubled }, children);
}
export default Component39945;
