import React from 'react';
const LABEL_6683 = 'component_6683';
export function Component6683({ value = 6683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6683, 'data-value': derived.doubled }, children);
}
export default Component6683;
