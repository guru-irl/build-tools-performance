import React from 'react';
const LABEL_38385 = 'component_38385';
export function Component38385({ value = 38385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38385, 'data-value': derived.doubled }, children);
}
export default Component38385;
