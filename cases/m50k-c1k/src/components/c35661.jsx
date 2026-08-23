import React from 'react';
const LABEL_35661 = 'component_35661';
export function Component35661({ value = 35661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35661, 'data-value': derived.doubled }, children);
}
export default Component35661;
