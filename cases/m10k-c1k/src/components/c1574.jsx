import React from 'react';
const LABEL_1574 = 'component_1574';
export function Component1574({ value = 1574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1574, 'data-value': derived.doubled }, children);
}
export default Component1574;
