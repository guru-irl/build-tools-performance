import React from 'react';
const LABEL_8696 = 'component_8696';
export function Component8696({ value = 8696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8696, 'data-value': derived.doubled }, children);
}
export default Component8696;
