import React from 'react';
const LABEL_31222 = 'component_31222';
export function Component31222({ value = 31222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31222, 'data-value': derived.doubled }, children);
}
export default Component31222;
