import React from 'react';
const LABEL_22406 = 'component_22406';
export function Component22406({ value = 22406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22406, 'data-value': derived.doubled }, children);
}
export default Component22406;
