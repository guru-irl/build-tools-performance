import React from 'react';
const LABEL_38765 = 'component_38765';
export function Component38765({ value = 38765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38765, 'data-value': derived.doubled }, children);
}
export default Component38765;
