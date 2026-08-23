import React from 'react';
const LABEL_36593 = 'component_36593';
export function Component36593({ value = 36593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36593, 'data-value': derived.doubled }, children);
}
export default Component36593;
