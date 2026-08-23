import React from 'react';
const LABEL_2924 = 'component_2924';
export function Component2924({ value = 2924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2924, 'data-value': derived.doubled }, children);
}
export default Component2924;
