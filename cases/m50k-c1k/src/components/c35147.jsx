import React from 'react';
const LABEL_35147 = 'component_35147';
export function Component35147({ value = 35147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35147, 'data-value': derived.doubled }, children);
}
export default Component35147;
