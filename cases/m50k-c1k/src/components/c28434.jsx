import React from 'react';
const LABEL_28434 = 'component_28434';
export function Component28434({ value = 28434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28434, 'data-value': derived.doubled }, children);
}
export default Component28434;
