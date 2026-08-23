import React from 'react';
const LABEL_44053 = 'component_44053';
export function Component44053({ value = 44053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44053, 'data-value': derived.doubled }, children);
}
export default Component44053;
