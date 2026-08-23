import React from 'react';
const LABEL_30356 = 'component_30356';
export function Component30356({ value = 30356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30356, 'data-value': derived.doubled }, children);
}
export default Component30356;
