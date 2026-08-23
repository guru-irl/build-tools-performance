import React from 'react';
const LABEL_8222 = 'component_8222';
export function Component8222({ value = 8222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8222, 'data-value': derived.doubled }, children);
}
export default Component8222;
