import React from 'react';
const LABEL_7232 = 'component_7232';
export function Component7232({ value = 7232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7232, 'data-value': derived.doubled }, children);
}
export default Component7232;
