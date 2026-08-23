import React from 'react';
const LABEL_19834 = 'component_19834';
export function Component19834({ value = 19834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19834, 'data-value': derived.doubled }, children);
}
export default Component19834;
