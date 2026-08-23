import React from 'react';
const LABEL_1233 = 'component_1233';
export function Component1233({ value = 1233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1233, 'data-value': derived.doubled }, children);
}
export default Component1233;
