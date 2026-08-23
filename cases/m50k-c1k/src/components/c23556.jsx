import React from 'react';
const LABEL_23556 = 'component_23556';
export function Component23556({ value = 23556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23556, 'data-value': derived.doubled }, children);
}
export default Component23556;
