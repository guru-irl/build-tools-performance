import React from 'react';
const LABEL_44147 = 'component_44147';
export function Component44147({ value = 44147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44147, 'data-value': derived.doubled }, children);
}
export default Component44147;
