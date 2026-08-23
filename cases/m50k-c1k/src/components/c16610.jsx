import React from 'react';
const LABEL_16610 = 'component_16610';
export function Component16610({ value = 16610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16610, 'data-value': derived.doubled }, children);
}
export default Component16610;
