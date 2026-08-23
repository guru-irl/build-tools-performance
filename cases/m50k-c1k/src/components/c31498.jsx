import React from 'react';
const LABEL_31498 = 'component_31498';
export function Component31498({ value = 31498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31498, 'data-value': derived.doubled }, children);
}
export default Component31498;
