import React from 'react';
const LABEL_34834 = 'component_34834';
export function Component34834({ value = 34834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34834, 'data-value': derived.doubled }, children);
}
export default Component34834;
