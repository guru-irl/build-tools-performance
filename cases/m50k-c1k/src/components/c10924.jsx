import React from 'react';
const LABEL_10924 = 'component_10924';
export function Component10924({ value = 10924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10924, 'data-value': derived.doubled }, children);
}
export default Component10924;
