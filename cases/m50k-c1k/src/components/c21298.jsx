import React from 'react';
const LABEL_21298 = 'component_21298';
export function Component21298({ value = 21298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21298, 'data-value': derived.doubled }, children);
}
export default Component21298;
