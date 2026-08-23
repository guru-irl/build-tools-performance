import React from 'react';
const LABEL_1122 = 'component_1122';
export function Component1122({ value = 1122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1122, 'data-value': derived.doubled }, children);
}
export default Component1122;
