import React from 'react';
const LABEL_1603 = 'component_1603';
export function Component1603({ value = 1603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1603, 'data-value': derived.doubled }, children);
}
export default Component1603;
