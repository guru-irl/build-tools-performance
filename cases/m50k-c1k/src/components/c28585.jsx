import React from 'react';
const LABEL_28585 = 'component_28585';
export function Component28585({ value = 28585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28585, 'data-value': derived.doubled }, children);
}
export default Component28585;
