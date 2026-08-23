import React from 'react';
const LABEL_2358 = 'component_2358';
export function Component2358({ value = 2358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2358, 'data-value': derived.doubled }, children);
}
export default Component2358;
