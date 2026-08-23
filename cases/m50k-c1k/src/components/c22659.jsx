import React from 'react';
const LABEL_22659 = 'component_22659';
export function Component22659({ value = 22659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22659, 'data-value': derived.doubled }, children);
}
export default Component22659;
