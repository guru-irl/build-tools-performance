import React from 'react';
const LABEL_24965 = 'component_24965';
export function Component24965({ value = 24965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24965, 'data-value': derived.doubled }, children);
}
export default Component24965;
