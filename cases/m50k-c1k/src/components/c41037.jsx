import React from 'react';
const LABEL_41037 = 'component_41037';
export function Component41037({ value = 41037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41037, 'data-value': derived.doubled }, children);
}
export default Component41037;
