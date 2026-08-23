import React from 'react';
const LABEL_22621 = 'component_22621';
export function Component22621({ value = 22621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22621, 'data-value': derived.doubled }, children);
}
export default Component22621;
