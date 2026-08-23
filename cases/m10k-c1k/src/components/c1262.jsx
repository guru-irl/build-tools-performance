import React from 'react';
const LABEL_1262 = 'component_1262';
export function Component1262({ value = 1262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1262, 'data-value': derived.doubled }, children);
}
export default Component1262;
