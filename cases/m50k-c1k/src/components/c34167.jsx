import React from 'react';
const LABEL_34167 = 'component_34167';
export function Component34167({ value = 34167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34167, 'data-value': derived.doubled }, children);
}
export default Component34167;
