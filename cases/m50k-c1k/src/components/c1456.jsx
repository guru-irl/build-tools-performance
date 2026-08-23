import React from 'react';
const LABEL_1456 = 'component_1456';
export function Component1456({ value = 1456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1456, 'data-value': derived.doubled }, children);
}
export default Component1456;
