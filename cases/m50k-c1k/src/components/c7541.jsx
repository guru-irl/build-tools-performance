import React from 'react';
const LABEL_7541 = 'component_7541';
export function Component7541({ value = 7541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7541, 'data-value': derived.doubled }, children);
}
export default Component7541;
