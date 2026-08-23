import React from 'react';
const LABEL_1097 = 'component_1097';
export function Component1097({ value = 1097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1097, 'data-value': derived.doubled }, children);
}
export default Component1097;
