import React from 'react';
const LABEL_1753 = 'component_1753';
export function Component1753({ value = 1753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1753, 'data-value': derived.doubled }, children);
}
export default Component1753;
