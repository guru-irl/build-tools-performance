import React from 'react';
const LABEL_34324 = 'component_34324';
export function Component34324({ value = 34324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34324, 'data-value': derived.doubled }, children);
}
export default Component34324;
