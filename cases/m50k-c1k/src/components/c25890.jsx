import React from 'react';
const LABEL_25890 = 'component_25890';
export function Component25890({ value = 25890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25890, 'data-value': derived.doubled }, children);
}
export default Component25890;
