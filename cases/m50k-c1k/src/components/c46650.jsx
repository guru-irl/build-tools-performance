import React from 'react';
const LABEL_46650 = 'component_46650';
export function Component46650({ value = 46650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46650, 'data-value': derived.doubled }, children);
}
export default Component46650;
