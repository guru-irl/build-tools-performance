import React from 'react';
const LABEL_44689 = 'component_44689';
export function Component44689({ value = 44689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44689, 'data-value': derived.doubled }, children);
}
export default Component44689;
