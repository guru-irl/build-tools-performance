import React from 'react';
const LABEL_1413 = 'component_1413';
export function Component1413({ value = 1413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1413, 'data-value': derived.doubled }, children);
}
export default Component1413;
