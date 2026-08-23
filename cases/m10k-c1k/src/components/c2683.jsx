import React from 'react';
const LABEL_2683 = 'component_2683';
export function Component2683({ value = 2683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2683, 'data-value': derived.doubled }, children);
}
export default Component2683;
