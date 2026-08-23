import React from 'react';
const LABEL_6541 = 'component_6541';
export function Component6541({ value = 6541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6541, 'data-value': derived.doubled }, children);
}
export default Component6541;
