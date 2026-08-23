import React from 'react';
const LABEL_22239 = 'component_22239';
export function Component22239({ value = 22239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22239, 'data-value': derived.doubled }, children);
}
export default Component22239;
