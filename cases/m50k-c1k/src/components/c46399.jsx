import React from 'react';
const LABEL_46399 = 'component_46399';
export function Component46399({ value = 46399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46399, 'data-value': derived.doubled }, children);
}
export default Component46399;
