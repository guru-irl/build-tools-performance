import React from 'react';
const LABEL_1835 = 'component_1835';
export function Component1835({ value = 1835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1835, 'data-value': derived.doubled }, children);
}
export default Component1835;
