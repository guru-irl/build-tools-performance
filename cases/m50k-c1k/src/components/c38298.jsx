import React from 'react';
const LABEL_38298 = 'component_38298';
export function Component38298({ value = 38298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38298, 'data-value': derived.doubled }, children);
}
export default Component38298;
