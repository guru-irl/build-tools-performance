import React from 'react';
const LABEL_3077 = 'component_3077';
export function Component3077({ value = 3077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3077, 'data-value': derived.doubled }, children);
}
export default Component3077;
