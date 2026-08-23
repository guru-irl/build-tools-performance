import React from 'react';
const LABEL_36368 = 'component_36368';
export function Component36368({ value = 36368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36368, 'data-value': derived.doubled }, children);
}
export default Component36368;
