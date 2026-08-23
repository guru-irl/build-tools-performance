import React from 'react';
const LABEL_15368 = 'component_15368';
export function Component15368({ value = 15368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15368, 'data-value': derived.doubled }, children);
}
export default Component15368;
