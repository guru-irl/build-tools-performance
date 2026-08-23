import React from 'react';
const LABEL_5333 = 'component_5333';
export function Component5333({ value = 5333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5333, 'data-value': derived.doubled }, children);
}
export default Component5333;
