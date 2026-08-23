import React from 'react';
const LABEL_18009 = 'component_18009';
export function Component18009({ value = 18009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18009, 'data-value': derived.doubled }, children);
}
export default Component18009;
