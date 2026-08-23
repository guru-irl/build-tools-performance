import React from 'react';
const LABEL_28165 = 'component_28165';
export function Component28165({ value = 28165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28165, 'data-value': derived.doubled }, children);
}
export default Component28165;
