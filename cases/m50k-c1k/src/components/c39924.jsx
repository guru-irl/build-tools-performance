import React from 'react';
const LABEL_39924 = 'component_39924';
export function Component39924({ value = 39924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39924, 'data-value': derived.doubled }, children);
}
export default Component39924;
