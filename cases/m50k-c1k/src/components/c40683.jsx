import React from 'react';
const LABEL_40683 = 'component_40683';
export function Component40683({ value = 40683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40683, 'data-value': derived.doubled }, children);
}
export default Component40683;
