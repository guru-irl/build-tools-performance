import React from 'react';
const LABEL_38464 = 'component_38464';
export function Component38464({ value = 38464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38464, 'data-value': derived.doubled }, children);
}
export default Component38464;
