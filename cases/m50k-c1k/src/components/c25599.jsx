import React from 'react';
const LABEL_25599 = 'component_25599';
export function Component25599({ value = 25599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25599, 'data-value': derived.doubled }, children);
}
export default Component25599;
