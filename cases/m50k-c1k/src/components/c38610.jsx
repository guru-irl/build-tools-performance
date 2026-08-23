import React from 'react';
const LABEL_38610 = 'component_38610';
export function Component38610({ value = 38610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38610, 'data-value': derived.doubled }, children);
}
export default Component38610;
