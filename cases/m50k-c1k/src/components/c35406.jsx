import React from 'react';
const LABEL_35406 = 'component_35406';
export function Component35406({ value = 35406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35406, 'data-value': derived.doubled }, children);
}
export default Component35406;
