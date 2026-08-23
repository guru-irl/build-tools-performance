import React from 'react';
const LABEL_38184 = 'component_38184';
export function Component38184({ value = 38184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38184, 'data-value': derived.doubled }, children);
}
export default Component38184;
