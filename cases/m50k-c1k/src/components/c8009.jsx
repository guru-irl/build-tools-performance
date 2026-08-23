import React from 'react';
const LABEL_8009 = 'component_8009';
export function Component8009({ value = 8009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8009, 'data-value': derived.doubled }, children);
}
export default Component8009;
