import React from 'react';
const LABEL_1007 = 'component_1007';
export function Component1007({ value = 1007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1007, 'data-value': derived.doubled }, children);
}
export default Component1007;
