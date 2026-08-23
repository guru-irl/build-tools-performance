import React from 'react';
const LABEL_19037 = 'component_19037';
export function Component19037({ value = 19037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19037, 'data-value': derived.doubled }, children);
}
export default Component19037;
