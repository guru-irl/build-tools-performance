import React from 'react';
const LABEL_25356 = 'component_25356';
export function Component25356({ value = 25356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25356, 'data-value': derived.doubled }, children);
}
export default Component25356;
