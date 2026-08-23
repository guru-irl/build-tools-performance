import React from 'react';
const LABEL_13456 = 'component_13456';
export function Component13456({ value = 13456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13456, 'data-value': derived.doubled }, children);
}
export default Component13456;
