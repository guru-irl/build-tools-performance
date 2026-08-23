import React from 'react';
const LABEL_28010 = 'component_28010';
export function Component28010({ value = 28010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28010, 'data-value': derived.doubled }, children);
}
export default Component28010;
