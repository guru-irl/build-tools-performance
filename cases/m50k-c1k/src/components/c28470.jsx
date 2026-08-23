import React from 'react';
const LABEL_28470 = 'component_28470';
export function Component28470({ value = 28470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28470, 'data-value': derived.doubled }, children);
}
export default Component28470;
