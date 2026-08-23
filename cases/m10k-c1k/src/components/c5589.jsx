import React from 'react';
const LABEL_5589 = 'component_5589';
export function Component5589({ value = 5589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5589, 'data-value': derived.doubled }, children);
}
export default Component5589;
