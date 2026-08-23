import React from 'react';
const LABEL_15472 = 'component_15472';
export function Component15472({ value = 15472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15472, 'data-value': derived.doubled }, children);
}
export default Component15472;
