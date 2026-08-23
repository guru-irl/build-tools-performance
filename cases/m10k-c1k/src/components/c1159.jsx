import React from 'react';
const LABEL_1159 = 'component_1159';
export function Component1159({ value = 1159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1159, 'data-value': derived.doubled }, children);
}
export default Component1159;
