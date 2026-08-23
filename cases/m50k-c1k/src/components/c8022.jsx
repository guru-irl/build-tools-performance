import React from 'react';
const LABEL_8022 = 'component_8022';
export function Component8022({ value = 8022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8022, 'data-value': derived.doubled }, children);
}
export default Component8022;
