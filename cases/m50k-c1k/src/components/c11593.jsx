import React from 'react';
const LABEL_11593 = 'component_11593';
export function Component11593({ value = 11593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11593, 'data-value': derived.doubled }, children);
}
export default Component11593;
