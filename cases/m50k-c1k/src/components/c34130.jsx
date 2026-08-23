import React from 'react';
const LABEL_34130 = 'component_34130';
export function Component34130({ value = 34130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34130, 'data-value': derived.doubled }, children);
}
export default Component34130;
