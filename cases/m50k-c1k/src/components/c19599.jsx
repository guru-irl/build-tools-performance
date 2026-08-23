import React from 'react';
const LABEL_19599 = 'component_19599';
export function Component19599({ value = 19599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19599, 'data-value': derived.doubled }, children);
}
export default Component19599;
