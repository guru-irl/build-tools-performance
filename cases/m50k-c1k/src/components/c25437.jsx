import React from 'react';
const LABEL_25437 = 'component_25437';
export function Component25437({ value = 25437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25437, 'data-value': derived.doubled }, children);
}
export default Component25437;
