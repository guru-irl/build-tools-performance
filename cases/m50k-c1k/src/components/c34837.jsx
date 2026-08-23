import React from 'react';
const LABEL_34837 = 'component_34837';
export function Component34837({ value = 34837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34837, 'data-value': derived.doubled }, children);
}
export default Component34837;
