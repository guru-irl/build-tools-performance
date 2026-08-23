import React from 'react';
const LABEL_16890 = 'component_16890';
export function Component16890({ value = 16890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16890, 'data-value': derived.doubled }, children);
}
export default Component16890;
