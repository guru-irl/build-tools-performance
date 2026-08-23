import React from 'react';
const LABEL_28368 = 'component_28368';
export function Component28368({ value = 28368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28368, 'data-value': derived.doubled }, children);
}
export default Component28368;
