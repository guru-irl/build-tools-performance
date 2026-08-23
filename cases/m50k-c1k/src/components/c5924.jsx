import React from 'react';
const LABEL_5924 = 'component_5924';
export function Component5924({ value = 5924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5924, 'data-value': derived.doubled }, children);
}
export default Component5924;
