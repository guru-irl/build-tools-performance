import React from 'react';
const LABEL_29406 = 'component_29406';
export function Component29406({ value = 29406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29406, 'data-value': derived.doubled }, children);
}
export default Component29406;
