import React from 'react';
const LABEL_1689 = 'component_1689';
export function Component1689({ value = 1689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1689, 'data-value': derived.doubled }, children);
}
export default Component1689;
