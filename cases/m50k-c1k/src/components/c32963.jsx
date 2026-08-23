import React from 'react';
const LABEL_32963 = 'component_32963';
export function Component32963({ value = 32963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32963, 'data-value': derived.doubled }, children);
}
export default Component32963;
