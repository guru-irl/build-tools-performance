import React from 'react';
const LABEL_25385 = 'component_25385';
export function Component25385({ value = 25385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25385, 'data-value': derived.doubled }, children);
}
export default Component25385;
