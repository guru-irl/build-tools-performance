import React from 'react';
const LABEL_25220 = 'component_25220';
export function Component25220({ value = 25220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25220, 'data-value': derived.doubled }, children);
}
export default Component25220;
