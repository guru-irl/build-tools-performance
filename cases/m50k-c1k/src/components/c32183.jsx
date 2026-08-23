import React from 'react';
const LABEL_32183 = 'component_32183';
export function Component32183({ value = 32183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32183, 'data-value': derived.doubled }, children);
}
export default Component32183;
