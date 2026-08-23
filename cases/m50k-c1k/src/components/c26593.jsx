import React from 'react';
const LABEL_26593 = 'component_26593';
export function Component26593({ value = 26593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26593, 'data-value': derived.doubled }, children);
}
export default Component26593;
