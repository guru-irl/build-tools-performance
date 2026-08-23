import React from 'react';
const LABEL_38329 = 'component_38329';
export function Component38329({ value = 38329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38329, 'data-value': derived.doubled }, children);
}
export default Component38329;
