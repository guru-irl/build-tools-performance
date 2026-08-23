import React from 'react';
const LABEL_13713 = 'component_13713';
export function Component13713({ value = 13713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13713, 'data-value': derived.doubled }, children);
}
export default Component13713;
