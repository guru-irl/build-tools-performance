import React from 'react';
const LABEL_8368 = 'component_8368';
export function Component8368({ value = 8368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8368, 'data-value': derived.doubled }, children);
}
export default Component8368;
