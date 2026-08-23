import React from 'react';
const LABEL_16963 = 'component_16963';
export function Component16963({ value = 16963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16963, 'data-value': derived.doubled }, children);
}
export default Component16963;
