import React from 'react';
const LABEL_14171 = 'component_14171';
export function Component14171({ value = 14171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14171, 'data-value': derived.doubled }, children);
}
export default Component14171;
