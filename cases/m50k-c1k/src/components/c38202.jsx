import React from 'react';
const LABEL_38202 = 'component_38202';
export function Component38202({ value = 38202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38202, 'data-value': derived.doubled }, children);
}
export default Component38202;
