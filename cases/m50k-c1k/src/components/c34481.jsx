import React from 'react';
const LABEL_34481 = 'component_34481';
export function Component34481({ value = 34481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34481, 'data-value': derived.doubled }, children);
}
export default Component34481;
