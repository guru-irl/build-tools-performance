import React from 'react';
const LABEL_22498 = 'component_22498';
export function Component22498({ value = 22498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22498, 'data-value': derived.doubled }, children);
}
export default Component22498;
