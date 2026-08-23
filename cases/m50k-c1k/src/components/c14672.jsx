import React from 'react';
const LABEL_14672 = 'component_14672';
export function Component14672({ value = 14672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14672, 'data-value': derived.doubled }, children);
}
export default Component14672;
