import React from 'react';
const LABEL_13498 = 'component_13498';
export function Component13498({ value = 13498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13498, 'data-value': derived.doubled }, children);
}
export default Component13498;
