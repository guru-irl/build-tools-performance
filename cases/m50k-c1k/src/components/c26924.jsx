import React from 'react';
const LABEL_26924 = 'component_26924';
export function Component26924({ value = 26924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26924, 'data-value': derived.doubled }, children);
}
export default Component26924;
