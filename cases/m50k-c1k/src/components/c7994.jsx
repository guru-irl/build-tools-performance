import React from 'react';
const LABEL_7994 = 'component_7994';
export function Component7994({ value = 7994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7994, 'data-value': derived.doubled }, children);
}
export default Component7994;
