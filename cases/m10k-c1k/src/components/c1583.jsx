import React from 'react';
const LABEL_1583 = 'component_1583';
export function Component1583({ value = 1583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1583, 'data-value': derived.doubled }, children);
}
export default Component1583;
