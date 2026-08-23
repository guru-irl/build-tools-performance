import React from 'react';
const LABEL_44890 = 'component_44890';
export function Component44890({ value = 44890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44890, 'data-value': derived.doubled }, children);
}
export default Component44890;
