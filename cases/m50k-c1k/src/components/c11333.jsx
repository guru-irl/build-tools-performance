import React from 'react';
const LABEL_11333 = 'component_11333';
export function Component11333({ value = 11333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11333, 'data-value': derived.doubled }, children);
}
export default Component11333;
