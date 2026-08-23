import React from 'react';
const LABEL_25593 = 'component_25593';
export function Component25593({ value = 25593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25593, 'data-value': derived.doubled }, children);
}
export default Component25593;
