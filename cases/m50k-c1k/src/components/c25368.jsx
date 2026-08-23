import React from 'react';
const LABEL_25368 = 'component_25368';
export function Component25368({ value = 25368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25368, 'data-value': derived.doubled }, children);
}
export default Component25368;
