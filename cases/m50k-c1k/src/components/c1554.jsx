import React from 'react';
const LABEL_1554 = 'component_1554';
export function Component1554({ value = 1554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1554, 'data-value': derived.doubled }, children);
}
export default Component1554;
