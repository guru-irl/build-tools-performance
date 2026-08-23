import React from 'react';
const LABEL_25009 = 'component_25009';
export function Component25009({ value = 25009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25009, 'data-value': derived.doubled }, children);
}
export default Component25009;
