import React from 'react';
const LABEL_1078 = 'component_1078';
export function Component1078({ value = 1078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1078, 'data-value': derived.doubled }, children);
}
export default Component1078;
