import React from 'react';
const LABEL_1198 = 'component_1198';
export function Component1198({ value = 1198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1198, 'data-value': derived.doubled }, children);
}
export default Component1198;
