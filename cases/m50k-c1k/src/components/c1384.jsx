import React from 'react';
const LABEL_1384 = 'component_1384';
export function Component1384({ value = 1384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1384, 'data-value': derived.doubled }, children);
}
export default Component1384;
