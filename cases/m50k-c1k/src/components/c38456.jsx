import React from 'react';
const LABEL_38456 = 'component_38456';
export function Component38456({ value = 38456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38456, 'data-value': derived.doubled }, children);
}
export default Component38456;
