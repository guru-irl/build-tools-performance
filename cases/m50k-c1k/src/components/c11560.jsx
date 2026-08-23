import React from 'react';
const LABEL_11560 = 'component_11560';
export function Component11560({ value = 11560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11560, 'data-value': derived.doubled }, children);
}
export default Component11560;
