import React from 'react';
const LABEL_25939 = 'component_25939';
export function Component25939({ value = 25939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25939, 'data-value': derived.doubled }, children);
}
export default Component25939;
