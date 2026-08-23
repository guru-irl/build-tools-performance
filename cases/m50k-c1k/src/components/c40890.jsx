import React from 'react';
const LABEL_40890 = 'component_40890';
export function Component40890({ value = 40890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40890, 'data-value': derived.doubled }, children);
}
export default Component40890;
