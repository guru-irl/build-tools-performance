import React from 'react';
const LABEL_26982 = 'component_26982';
export function Component26982({ value = 26982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26982, 'data-value': derived.doubled }, children);
}
export default Component26982;
