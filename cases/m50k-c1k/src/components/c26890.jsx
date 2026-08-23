import React from 'react';
const LABEL_26890 = 'component_26890';
export function Component26890({ value = 26890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26890, 'data-value': derived.doubled }, children);
}
export default Component26890;
