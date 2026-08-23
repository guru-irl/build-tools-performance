import React from 'react';
const LABEL_38557 = 'component_38557';
export function Component38557({ value = 38557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38557, 'data-value': derived.doubled }, children);
}
export default Component38557;
