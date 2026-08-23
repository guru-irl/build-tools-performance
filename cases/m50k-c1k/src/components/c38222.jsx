import React from 'react';
const LABEL_38222 = 'component_38222';
export function Component38222({ value = 38222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38222, 'data-value': derived.doubled }, children);
}
export default Component38222;
