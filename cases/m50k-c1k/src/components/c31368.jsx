import React from 'react';
const LABEL_31368 = 'component_31368';
export function Component31368({ value = 31368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31368, 'data-value': derived.doubled }, children);
}
export default Component31368;
