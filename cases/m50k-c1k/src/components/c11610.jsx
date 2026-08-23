import React from 'react';
const LABEL_11610 = 'component_11610';
export function Component11610({ value = 11610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11610, 'data-value': derived.doubled }, children);
}
export default Component11610;
