import React from 'react';
const LABEL_38277 = 'component_38277';
export function Component38277({ value = 38277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38277, 'data-value': derived.doubled }, children);
}
export default Component38277;
