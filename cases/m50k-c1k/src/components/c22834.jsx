import React from 'react';
const LABEL_22834 = 'component_22834';
export function Component22834({ value = 22834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22834, 'data-value': derived.doubled }, children);
}
export default Component22834;
