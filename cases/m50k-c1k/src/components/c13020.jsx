import React from 'react';
const LABEL_13020 = 'component_13020';
export function Component13020({ value = 13020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13020, 'data-value': derived.doubled }, children);
}
export default Component13020;
