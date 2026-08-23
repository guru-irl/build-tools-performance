import React from 'react';
const LABEL_34496 = 'component_34496';
export function Component34496({ value = 34496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34496, 'data-value': derived.doubled }, children);
}
export default Component34496;
