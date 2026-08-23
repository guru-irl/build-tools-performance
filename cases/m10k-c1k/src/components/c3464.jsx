import React from 'react';
const LABEL_3464 = 'component_3464';
export function Component3464({ value = 3464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3464, 'data-value': derived.doubled }, children);
}
export default Component3464;
