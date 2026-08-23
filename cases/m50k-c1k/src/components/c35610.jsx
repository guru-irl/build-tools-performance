import React from 'react';
const LABEL_35610 = 'component_35610';
export function Component35610({ value = 35610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35610, 'data-value': derived.doubled }, children);
}
export default Component35610;
