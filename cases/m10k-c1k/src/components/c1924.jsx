import React from 'react';
const LABEL_1924 = 'component_1924';
export function Component1924({ value = 1924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1924, 'data-value': derived.doubled }, children);
}
export default Component1924;
