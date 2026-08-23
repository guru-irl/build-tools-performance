import React from 'react';
const LABEL_11743 = 'component_11743';
export function Component11743({ value = 11743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11743, 'data-value': derived.doubled }, children);
}
export default Component11743;
