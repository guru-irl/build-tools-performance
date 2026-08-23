import React from 'react';
const LABEL_25683 = 'component_25683';
export function Component25683({ value = 25683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25683, 'data-value': derived.doubled }, children);
}
export default Component25683;
