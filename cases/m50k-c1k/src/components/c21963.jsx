import React from 'react';
const LABEL_21963 = 'component_21963';
export function Component21963({ value = 21963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21963, 'data-value': derived.doubled }, children);
}
export default Component21963;
