import React from 'react';
const LABEL_38802 = 'component_38802';
export function Component38802({ value = 38802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38802, 'data-value': derived.doubled }, children);
}
export default Component38802;
