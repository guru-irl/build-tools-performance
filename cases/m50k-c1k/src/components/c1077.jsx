import React from 'react';
const LABEL_1077 = 'component_1077';
export function Component1077({ value = 1077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1077, 'data-value': derived.doubled }, children);
}
export default Component1077;
