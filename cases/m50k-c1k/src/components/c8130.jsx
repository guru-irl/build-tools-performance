import React from 'react';
const LABEL_8130 = 'component_8130';
export function Component8130({ value = 8130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8130, 'data-value': derived.doubled }, children);
}
export default Component8130;
