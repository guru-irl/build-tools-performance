import React from 'react';
const LABEL_37610 = 'component_37610';
export function Component37610({ value = 37610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37610, 'data-value': derived.doubled }, children);
}
export default Component37610;
