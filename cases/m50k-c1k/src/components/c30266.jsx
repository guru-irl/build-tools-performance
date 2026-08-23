import React from 'react';
const LABEL_30266 = 'component_30266';
export function Component30266({ value = 30266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30266, 'data-value': derived.doubled }, children);
}
export default Component30266;
