import React from 'react';
const LABEL_25399 = 'component_25399';
export function Component25399({ value = 25399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25399, 'data-value': derived.doubled }, children);
}
export default Component25399;
