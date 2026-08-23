import React from 'react';
const LABEL_24556 = 'component_24556';
export function Component24556({ value = 24556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24556, 'data-value': derived.doubled }, children);
}
export default Component24556;
