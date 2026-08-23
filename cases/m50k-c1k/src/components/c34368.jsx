import React from 'react';
const LABEL_34368 = 'component_34368';
export function Component34368({ value = 34368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34368, 'data-value': derived.doubled }, children);
}
export default Component34368;
