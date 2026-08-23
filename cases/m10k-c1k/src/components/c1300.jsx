import React from 'react';
const LABEL_1300 = 'component_1300';
export function Component1300({ value = 1300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1300, 'data-value': derived.doubled }, children);
}
export default Component1300;
