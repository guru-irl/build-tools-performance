import React from 'react';
const LABEL_22619 = 'component_22619';
export function Component22619({ value = 22619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22619, 'data-value': derived.doubled }, children);
}
export default Component22619;
