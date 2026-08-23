import React from 'react';
const LABEL_34356 = 'component_34356';
export function Component34356({ value = 34356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34356, 'data-value': derived.doubled }, children);
}
export default Component34356;
