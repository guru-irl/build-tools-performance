import React from 'react';
const LABEL_368 = 'component_368';
export function Component368({ value = 368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_368, 'data-value': derived.doubled }, children);
}
export default Component368;
