import React from 'react';
const LABEL_22171 = 'component_22171';
export function Component22171({ value = 22171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22171, 'data-value': derived.doubled }, children);
}
export default Component22171;
