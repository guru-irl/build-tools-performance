import React from 'react';
const LABEL_38990 = 'component_38990';
export function Component38990({ value = 38990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38990, 'data-value': derived.doubled }, children);
}
export default Component38990;
