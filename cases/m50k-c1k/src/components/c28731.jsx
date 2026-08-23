import React from 'react';
const LABEL_28731 = 'component_28731';
export function Component28731({ value = 28731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28731, 'data-value': derived.doubled }, children);
}
export default Component28731;
