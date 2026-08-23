import React from 'react';
const LABEL_36610 = 'component_36610';
export function Component36610({ value = 36610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36610, 'data-value': derived.doubled }, children);
}
export default Component36610;
