import React from 'react';
const LABEL_1702 = 'component_1702';
export function Component1702({ value = 1702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1702, 'data-value': derived.doubled }, children);
}
export default Component1702;
