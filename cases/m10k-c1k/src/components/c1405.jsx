import React from 'react';
const LABEL_1405 = 'component_1405';
export function Component1405({ value = 1405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1405, 'data-value': derived.doubled }, children);
}
export default Component1405;
