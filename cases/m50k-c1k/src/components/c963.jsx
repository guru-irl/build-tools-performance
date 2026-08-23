import React from 'react';
const LABEL_963 = 'component_963';
export function Component963({ value = 963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_963, 'data-value': derived.doubled }, children);
}
export default Component963;
