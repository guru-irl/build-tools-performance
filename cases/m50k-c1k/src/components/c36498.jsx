import React from 'react';
const LABEL_36498 = 'component_36498';
export function Component36498({ value = 36498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36498, 'data-value': derived.doubled }, children);
}
export default Component36498;
