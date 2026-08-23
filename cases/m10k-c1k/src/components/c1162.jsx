import React from 'react';
const LABEL_1162 = 'component_1162';
export function Component1162({ value = 1162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1162, 'data-value': derived.doubled }, children);
}
export default Component1162;
