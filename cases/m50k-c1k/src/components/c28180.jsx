import React from 'react';
const LABEL_28180 = 'component_28180';
export function Component28180({ value = 28180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28180, 'data-value': derived.doubled }, children);
}
export default Component28180;
