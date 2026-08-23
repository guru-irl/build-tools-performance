import React from 'react';
const LABEL_38499 = 'component_38499';
export function Component38499({ value = 38499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38499, 'data-value': derived.doubled }, children);
}
export default Component38499;
