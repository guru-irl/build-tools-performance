import React from 'react';
const LABEL_34232 = 'component_34232';
export function Component34232({ value = 34232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34232, 'data-value': derived.doubled }, children);
}
export default Component34232;
