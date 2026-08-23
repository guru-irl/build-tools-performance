import React from 'react';
const LABEL_26437 = 'component_26437';
export function Component26437({ value = 26437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26437, 'data-value': derived.doubled }, children);
}
export default Component26437;
