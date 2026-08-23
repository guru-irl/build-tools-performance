import React from 'react';
const LABEL_1651 = 'component_1651';
export function Component1651({ value = 1651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1651, 'data-value': derived.doubled }, children);
}
export default Component1651;
