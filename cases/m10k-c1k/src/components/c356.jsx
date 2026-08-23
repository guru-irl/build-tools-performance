import React from 'react';
const LABEL_356 = 'component_356';
export function Component356({ value = 356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_356, 'data-value': derived.doubled }, children);
}
export default Component356;
