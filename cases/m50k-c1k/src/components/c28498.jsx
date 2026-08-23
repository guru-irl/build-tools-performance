import React from 'react';
const LABEL_28498 = 'component_28498';
export function Component28498({ value = 28498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28498, 'data-value': derived.doubled }, children);
}
export default Component28498;
