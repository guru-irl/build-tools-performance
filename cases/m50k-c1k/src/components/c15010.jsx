import React from 'react';
const LABEL_15010 = 'component_15010';
export function Component15010({ value = 15010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15010, 'data-value': derived.doubled }, children);
}
export default Component15010;
