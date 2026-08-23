import React from 'react';
const LABEL_1380 = 'component_1380';
export function Component1380({ value = 1380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1380, 'data-value': derived.doubled }, children);
}
export default Component1380;
