import React from 'react';
const LABEL_3890 = 'component_3890';
export function Component3890({ value = 3890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3890, 'data-value': derived.doubled }, children);
}
export default Component3890;
