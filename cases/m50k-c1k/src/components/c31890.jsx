import React from 'react';
const LABEL_31890 = 'component_31890';
export function Component31890({ value = 31890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31890, 'data-value': derived.doubled }, children);
}
export default Component31890;
