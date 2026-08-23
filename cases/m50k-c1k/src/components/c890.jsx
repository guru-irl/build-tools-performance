import React from 'react';
const LABEL_890 = 'component_890';
export function Component890({ value = 890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_890, 'data-value': derived.doubled }, children);
}
export default Component890;
