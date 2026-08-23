import React from 'react';
const LABEL_2498 = 'component_2498';
export function Component2498({ value = 2498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2498, 'data-value': derived.doubled }, children);
}
export default Component2498;
