import React from 'react';
const LABEL_29437 = 'component_29437';
export function Component29437({ value = 29437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29437, 'data-value': derived.doubled }, children);
}
export default Component29437;
