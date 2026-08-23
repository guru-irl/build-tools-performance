import React from 'react';
const LABEL_1788 = 'component_1788';
export function Component1788({ value = 1788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1788, 'data-value': derived.doubled }, children);
}
export default Component1788;
