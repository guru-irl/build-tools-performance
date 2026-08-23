import React from 'react';
const LABEL_14498 = 'component_14498';
export function Component14498({ value = 14498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14498, 'data-value': derived.doubled }, children);
}
export default Component14498;
