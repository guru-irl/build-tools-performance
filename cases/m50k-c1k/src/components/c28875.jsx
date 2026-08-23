import React from 'react';
const LABEL_28875 = 'component_28875';
export function Component28875({ value = 28875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28875, 'data-value': derived.doubled }, children);
}
export default Component28875;
