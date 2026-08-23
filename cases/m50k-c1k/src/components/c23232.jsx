import React from 'react';
const LABEL_23232 = 'component_23232';
export function Component23232({ value = 23232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23232, 'data-value': derived.doubled }, children);
}
export default Component23232;
