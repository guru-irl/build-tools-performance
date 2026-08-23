import React from 'react';
const LABEL_1608 = 'component_1608';
export function Component1608({ value = 1608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1608, 'data-value': derived.doubled }, children);
}
export default Component1608;
