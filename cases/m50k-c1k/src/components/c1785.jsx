import React from 'react';
const LABEL_1785 = 'component_1785';
export function Component1785({ value = 1785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1785, 'data-value': derived.doubled }, children);
}
export default Component1785;
