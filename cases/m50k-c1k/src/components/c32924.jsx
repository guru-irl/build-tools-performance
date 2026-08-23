import React from 'react';
const LABEL_32924 = 'component_32924';
export function Component32924({ value = 32924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32924, 'data-value': derived.doubled }, children);
}
export default Component32924;
