import React from 'react';
const LABEL_21584 = 'component_21584';
export function Component21584({ value = 21584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21584, 'data-value': derived.doubled }, children);
}
export default Component21584;
