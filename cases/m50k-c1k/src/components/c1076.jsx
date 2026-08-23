import React from 'react';
const LABEL_1076 = 'component_1076';
export function Component1076({ value = 1076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1076, 'data-value': derived.doubled }, children);
}
export default Component1076;
