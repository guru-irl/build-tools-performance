import React from 'react';
const LABEL_36834 = 'component_36834';
export function Component36834({ value = 36834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36834, 'data-value': derived.doubled }, children);
}
export default Component36834;
