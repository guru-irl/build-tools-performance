import React from 'react';
const LABEL_38206 = 'component_38206';
export function Component38206({ value = 38206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38206, 'data-value': derived.doubled }, children);
}
export default Component38206;
