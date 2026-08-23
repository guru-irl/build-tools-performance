import React from 'react';
const LABEL_1796 = 'component_1796';
export function Component1796({ value = 1796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1796, 'data-value': derived.doubled }, children);
}
export default Component1796;
