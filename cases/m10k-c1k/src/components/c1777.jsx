import React from 'react';
const LABEL_1777 = 'component_1777';
export function Component1777({ value = 1777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1777, 'data-value': derived.doubled }, children);
}
export default Component1777;
