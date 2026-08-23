import React from 'react';
const LABEL_14040 = 'component_14040';
export function Component14040({ value = 14040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14040, 'data-value': derived.doubled }, children);
}
export default Component14040;
