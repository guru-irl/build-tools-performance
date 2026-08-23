import React from 'react';
const LABEL_34553 = 'component_34553';
export function Component34553({ value = 34553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34553, 'data-value': derived.doubled }, children);
}
export default Component34553;
