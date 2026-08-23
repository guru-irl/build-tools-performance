import React from 'react';
const LABEL_12044 = 'component_12044';
export function Component12044({ value = 12044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12044, 'data-value': derived.doubled }, children);
}
export default Component12044;
