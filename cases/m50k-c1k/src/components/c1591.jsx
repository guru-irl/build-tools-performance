import React from 'react';
const LABEL_1591 = 'component_1591';
export function Component1591({ value = 1591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1591, 'data-value': derived.doubled }, children);
}
export default Component1591;
