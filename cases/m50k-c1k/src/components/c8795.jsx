import React from 'react';
const LABEL_8795 = 'component_8795';
export function Component8795({ value = 8795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8795, 'data-value': derived.doubled }, children);
}
export default Component8795;
