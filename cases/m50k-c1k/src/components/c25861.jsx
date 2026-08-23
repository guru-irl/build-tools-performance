import React from 'react';
const LABEL_25861 = 'component_25861';
export function Component25861({ value = 25861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25861, 'data-value': derived.doubled }, children);
}
export default Component25861;
