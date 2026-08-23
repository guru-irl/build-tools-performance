import React from 'react';
const LABEL_28171 = 'component_28171';
export function Component28171({ value = 28171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28171, 'data-value': derived.doubled }, children);
}
export default Component28171;
