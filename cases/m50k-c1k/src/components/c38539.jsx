import React from 'react';
const LABEL_38539 = 'component_38539';
export function Component38539({ value = 38539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38539, 'data-value': derived.doubled }, children);
}
export default Component38539;
