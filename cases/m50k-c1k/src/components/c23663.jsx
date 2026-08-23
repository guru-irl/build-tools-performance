import React from 'react';
const LABEL_23663 = 'component_23663';
export function Component23663({ value = 23663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23663, 'data-value': derived.doubled }, children);
}
export default Component23663;
