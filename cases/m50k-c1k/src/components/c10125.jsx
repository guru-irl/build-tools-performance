import React from 'react';
const LABEL_10125 = 'component_10125';
export function Component10125({ value = 10125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10125, 'data-value': derived.doubled }, children);
}
export default Component10125;
