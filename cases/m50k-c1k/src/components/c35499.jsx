import React from 'react';
const LABEL_35499 = 'component_35499';
export function Component35499({ value = 35499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35499, 'data-value': derived.doubled }, children);
}
export default Component35499;
