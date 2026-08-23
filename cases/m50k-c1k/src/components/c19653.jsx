import React from 'react';
const LABEL_19653 = 'component_19653';
export function Component19653({ value = 19653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19653, 'data-value': derived.doubled }, children);
}
export default Component19653;
