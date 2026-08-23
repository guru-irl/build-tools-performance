import React from 'react';
const LABEL_26541 = 'component_26541';
export function Component26541({ value = 26541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26541, 'data-value': derived.doubled }, children);
}
export default Component26541;
