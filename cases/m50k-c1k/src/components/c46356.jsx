import React from 'react';
const LABEL_46356 = 'component_46356';
export function Component46356({ value = 46356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46356, 'data-value': derived.doubled }, children);
}
export default Component46356;
