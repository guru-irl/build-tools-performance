import React from 'react';
const LABEL_3860 = 'component_3860';
export function Component3860({ value = 3860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3860, 'data-value': derived.doubled }, children);
}
export default Component3860;
