import React from 'react';
const LABEL_45568 = 'component_45568';
export function Component45568({ value = 45568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45568, 'data-value': derived.doubled }, children);
}
export default Component45568;
