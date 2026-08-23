import React from 'react';
const LABEL_1968 = 'component_1968';
export function Component1968({ value = 1968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1968, 'data-value': derived.doubled }, children);
}
export default Component1968;
