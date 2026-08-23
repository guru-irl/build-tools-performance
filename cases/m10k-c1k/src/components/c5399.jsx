import React from 'react';
const LABEL_5399 = 'component_5399';
export function Component5399({ value = 5399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5399, 'data-value': derived.doubled }, children);
}
export default Component5399;
