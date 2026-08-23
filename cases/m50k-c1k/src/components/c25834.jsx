import React from 'react';
const LABEL_25834 = 'component_25834';
export function Component25834({ value = 25834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25834, 'data-value': derived.doubled }, children);
}
export default Component25834;
