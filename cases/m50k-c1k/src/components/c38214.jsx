import React from 'react';
const LABEL_38214 = 'component_38214';
export function Component38214({ value = 38214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38214, 'data-value': derived.doubled }, children);
}
export default Component38214;
