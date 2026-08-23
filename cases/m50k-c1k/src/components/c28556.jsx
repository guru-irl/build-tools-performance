import React from 'react';
const LABEL_28556 = 'component_28556';
export function Component28556({ value = 28556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28556, 'data-value': derived.doubled }, children);
}
export default Component28556;
