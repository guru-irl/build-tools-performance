import React from 'react';
const LABEL_15498 = 'component_15498';
export function Component15498({ value = 15498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15498, 'data-value': derived.doubled }, children);
}
export default Component15498;
