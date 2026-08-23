import React from 'react';
const LABEL_4683 = 'component_4683';
export function Component4683({ value = 4683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4683, 'data-value': derived.doubled }, children);
}
export default Component4683;
