import React from 'react';
const LABEL_1328 = 'component_1328';
export function Component1328({ value = 1328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1328, 'data-value': derived.doubled }, children);
}
export default Component1328;
