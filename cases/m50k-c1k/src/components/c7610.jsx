import React from 'react';
const LABEL_7610 = 'component_7610';
export function Component7610({ value = 7610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7610, 'data-value': derived.doubled }, children);
}
export default Component7610;
