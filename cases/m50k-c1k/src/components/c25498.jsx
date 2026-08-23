import React from 'react';
const LABEL_25498 = 'component_25498';
export function Component25498({ value = 25498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25498, 'data-value': derived.doubled }, children);
}
export default Component25498;
