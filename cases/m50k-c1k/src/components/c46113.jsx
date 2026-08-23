import React from 'react';
const LABEL_46113 = 'component_46113';
export function Component46113({ value = 46113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46113, 'data-value': derived.doubled }, children);
}
export default Component46113;
