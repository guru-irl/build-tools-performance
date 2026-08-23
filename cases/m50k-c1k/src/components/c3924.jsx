import React from 'react';
const LABEL_3924 = 'component_3924';
export function Component3924({ value = 3924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3924, 'data-value': derived.doubled }, children);
}
export default Component3924;
