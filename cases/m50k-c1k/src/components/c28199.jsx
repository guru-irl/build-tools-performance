import React from 'react';
const LABEL_28199 = 'component_28199';
export function Component28199({ value = 28199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28199, 'data-value': derived.doubled }, children);
}
export default Component28199;
