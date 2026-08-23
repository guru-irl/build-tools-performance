import React from 'react';
const LABEL_22875 = 'component_22875';
export function Component22875({ value = 22875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22875, 'data-value': derived.doubled }, children);
}
export default Component22875;
