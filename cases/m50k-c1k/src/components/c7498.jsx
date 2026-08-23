import React from 'react';
const LABEL_7498 = 'component_7498';
export function Component7498({ value = 7498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7498, 'data-value': derived.doubled }, children);
}
export default Component7498;
