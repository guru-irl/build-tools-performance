import React from 'react';
const LABEL_38651 = 'component_38651';
export function Component38651({ value = 38651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38651, 'data-value': derived.doubled }, children);
}
export default Component38651;
