import React from 'react';
const LABEL_1342 = 'component_1342';
export function Component1342({ value = 1342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1342, 'data-value': derived.doubled }, children);
}
export default Component1342;
