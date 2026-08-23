import React from 'react';
const LABEL_10127 = 'component_10127';
export function Component10127({ value = 10127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10127, 'data-value': derived.doubled }, children);
}
export default Component10127;
