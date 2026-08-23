import React from 'react';
const LABEL_28834 = 'component_28834';
export function Component28834({ value = 28834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28834, 'data-value': derived.doubled }, children);
}
export default Component28834;
