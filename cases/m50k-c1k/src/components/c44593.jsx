import React from 'react';
const LABEL_44593 = 'component_44593';
export function Component44593({ value = 44593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44593, 'data-value': derived.doubled }, children);
}
export default Component44593;
