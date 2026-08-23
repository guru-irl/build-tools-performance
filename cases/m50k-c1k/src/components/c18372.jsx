import React from 'react';
const LABEL_18372 = 'component_18372';
export function Component18372({ value = 18372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18372, 'data-value': derived.doubled }, children);
}
export default Component18372;
