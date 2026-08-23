import React from 'react';
const LABEL_26009 = 'component_26009';
export function Component26009({ value = 26009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26009, 'data-value': derived.doubled }, children);
}
export default Component26009;
