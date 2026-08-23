import React from 'react';
const LABEL_22965 = 'component_22965';
export function Component22965({ value = 22965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22965, 'data-value': derived.doubled }, children);
}
export default Component22965;
