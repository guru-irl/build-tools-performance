import React from 'react';
const LABEL_6556 = 'component_6556';
export function Component6556({ value = 6556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6556, 'data-value': derived.doubled }, children);
}
export default Component6556;
