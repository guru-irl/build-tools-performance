import React from 'react';
const LABEL_6963 = 'component_6963';
export function Component6963({ value = 6963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6963, 'data-value': derived.doubled }, children);
}
export default Component6963;
