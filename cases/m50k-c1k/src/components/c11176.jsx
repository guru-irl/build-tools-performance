import React from 'react';
const LABEL_11176 = 'component_11176';
export function Component11176({ value = 11176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11176, 'data-value': derived.doubled }, children);
}
export default Component11176;
