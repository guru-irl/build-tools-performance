import React from 'react';
const LABEL_33368 = 'component_33368';
export function Component33368({ value = 33368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33368, 'data-value': derived.doubled }, children);
}
export default Component33368;
