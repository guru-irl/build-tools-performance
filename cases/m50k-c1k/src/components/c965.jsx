import React from 'react';
const LABEL_965 = 'component_965';
export function Component965({ value = 965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_965, 'data-value': derived.doubled }, children);
}
export default Component965;
