import React from 'react';
const LABEL_14610 = 'component_14610';
export function Component14610({ value = 14610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14610, 'data-value': derived.doubled }, children);
}
export default Component14610;
