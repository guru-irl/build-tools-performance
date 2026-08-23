import React from 'react';
const LABEL_26130 = 'component_26130';
export function Component26130({ value = 26130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26130, 'data-value': derived.doubled }, children);
}
export default Component26130;
