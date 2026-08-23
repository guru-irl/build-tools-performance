import React from 'react';
const LABEL_38834 = 'component_38834';
export function Component38834({ value = 38834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38834, 'data-value': derived.doubled }, children);
}
export default Component38834;
