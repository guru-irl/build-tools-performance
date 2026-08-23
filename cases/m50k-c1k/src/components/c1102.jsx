import React from 'react';
const LABEL_1102 = 'component_1102';
export function Component1102({ value = 1102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1102, 'data-value': derived.doubled }, children);
}
export default Component1102;
