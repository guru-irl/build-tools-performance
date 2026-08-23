import React from 'react';
const LABEL_28204 = 'component_28204';
export function Component28204({ value = 28204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28204, 'data-value': derived.doubled }, children);
}
export default Component28204;
