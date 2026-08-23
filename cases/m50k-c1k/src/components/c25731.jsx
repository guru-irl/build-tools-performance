import React from 'react';
const LABEL_25731 = 'component_25731';
export function Component25731({ value = 25731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25731, 'data-value': derived.doubled }, children);
}
export default Component25731;
