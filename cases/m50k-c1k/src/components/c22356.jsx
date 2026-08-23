import React from 'react';
const LABEL_22356 = 'component_22356';
export function Component22356({ value = 22356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22356, 'data-value': derived.doubled }, children);
}
export default Component22356;
