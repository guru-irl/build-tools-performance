import React from 'react';
const LABEL_14965 = 'component_14965';
export function Component14965({ value = 14965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14965, 'data-value': derived.doubled }, children);
}
export default Component14965;
