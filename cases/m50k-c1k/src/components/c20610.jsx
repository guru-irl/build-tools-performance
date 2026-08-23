import React from 'react';
const LABEL_20610 = 'component_20610';
export function Component20610({ value = 20610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20610, 'data-value': derived.doubled }, children);
}
export default Component20610;
