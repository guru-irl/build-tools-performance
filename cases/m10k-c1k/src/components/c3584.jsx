import React from 'react';
const LABEL_3584 = 'component_3584';
export function Component3584({ value = 3584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3584, 'data-value': derived.doubled }, children);
}
export default Component3584;
