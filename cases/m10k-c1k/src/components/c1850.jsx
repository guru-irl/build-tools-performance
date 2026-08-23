import React from 'react';
const LABEL_1850 = 'component_1850';
export function Component1850({ value = 1850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1850, 'data-value': derived.doubled }, children);
}
export default Component1850;
