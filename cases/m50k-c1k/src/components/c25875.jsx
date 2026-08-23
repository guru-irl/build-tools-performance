import React from 'react';
const LABEL_25875 = 'component_25875';
export function Component25875({ value = 25875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25875, 'data-value': derived.doubled }, children);
}
export default Component25875;
