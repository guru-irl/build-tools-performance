import React from 'react';
const LABEL_11057 = 'component_11057';
export function Component11057({ value = 11057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11057, 'data-value': derived.doubled }, children);
}
export default Component11057;
