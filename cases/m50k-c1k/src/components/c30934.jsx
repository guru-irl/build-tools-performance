import React from 'react';
const LABEL_30934 = 'component_30934';
export function Component30934({ value = 30934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30934, 'data-value': derived.doubled }, children);
}
export default Component30934;
