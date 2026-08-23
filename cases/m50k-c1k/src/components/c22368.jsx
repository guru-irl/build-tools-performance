import React from 'react';
const LABEL_22368 = 'component_22368';
export function Component22368({ value = 22368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22368, 'data-value': derived.doubled }, children);
}
export default Component22368;
