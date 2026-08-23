import React from 'react';
const LABEL_1086 = 'component_1086';
export function Component1086({ value = 1086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1086, 'data-value': derived.doubled }, children);
}
export default Component1086;
