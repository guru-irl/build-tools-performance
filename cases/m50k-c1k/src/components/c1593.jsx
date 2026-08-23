import React from 'react';
const LABEL_1593 = 'component_1593';
export function Component1593({ value = 1593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1593, 'data-value': derived.doubled }, children);
}
export default Component1593;
