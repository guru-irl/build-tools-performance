import React from 'react';
const LABEL_38181 = 'component_38181';
export function Component38181({ value = 38181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38181, 'data-value': derived.doubled }, children);
}
export default Component38181;
