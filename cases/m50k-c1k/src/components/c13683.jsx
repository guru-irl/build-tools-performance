import React from 'react';
const LABEL_13683 = 'component_13683';
export function Component13683({ value = 13683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13683, 'data-value': derived.doubled }, children);
}
export default Component13683;
