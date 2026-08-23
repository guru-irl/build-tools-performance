import React from 'react';
const LABEL_25766 = 'component_25766';
export function Component25766({ value = 25766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25766, 'data-value': derived.doubled }, children);
}
export default Component25766;
