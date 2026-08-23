import React from 'react';
const LABEL_34559 = 'component_34559';
export function Component34559({ value = 34559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34559, 'data-value': derived.doubled }, children);
}
export default Component34559;
