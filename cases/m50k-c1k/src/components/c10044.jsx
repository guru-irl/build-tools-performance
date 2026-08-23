import React from 'react';
const LABEL_10044 = 'component_10044';
export function Component10044({ value = 10044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10044, 'data-value': derived.doubled }, children);
}
export default Component10044;
