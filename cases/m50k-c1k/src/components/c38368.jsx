import React from 'react';
const LABEL_38368 = 'component_38368';
export function Component38368({ value = 38368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38368, 'data-value': derived.doubled }, children);
}
export default Component38368;
