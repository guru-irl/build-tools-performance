import React from 'react';
const LABEL_18691 = 'component_18691';
export function Component18691({ value = 18691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18691, 'data-value': derived.doubled }, children);
}
export default Component18691;
