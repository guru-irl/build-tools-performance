import React from 'react';
const LABEL_35606 = 'component_35606';
export function Component35606({ value = 35606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35606, 'data-value': derived.doubled }, children);
}
export default Component35606;
