import React from 'react';
const LABEL_21406 = 'component_21406';
export function Component21406({ value = 21406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21406, 'data-value': derived.doubled }, children);
}
export default Component21406;
