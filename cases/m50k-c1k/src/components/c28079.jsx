import React from 'react';
const LABEL_28079 = 'component_28079';
export function Component28079({ value = 28079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28079, 'data-value': derived.doubled }, children);
}
export default Component28079;
