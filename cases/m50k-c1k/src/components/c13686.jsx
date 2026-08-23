import React from 'react';
const LABEL_13686 = 'component_13686';
export function Component13686({ value = 13686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13686, 'data-value': derived.doubled }, children);
}
export default Component13686;
