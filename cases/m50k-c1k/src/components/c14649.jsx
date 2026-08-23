import React from 'react';
const LABEL_14649 = 'component_14649';
export function Component14649({ value = 14649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14649, 'data-value': derived.doubled }, children);
}
export default Component14649;
