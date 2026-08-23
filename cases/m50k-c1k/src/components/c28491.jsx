import React from 'react';
const LABEL_28491 = 'component_28491';
export function Component28491({ value = 28491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28491, 'data-value': derived.doubled }, children);
}
export default Component28491;
