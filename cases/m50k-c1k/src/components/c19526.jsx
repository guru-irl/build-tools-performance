import React from 'react';
const LABEL_19526 = 'component_19526';
export function Component19526({ value = 19526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19526, 'data-value': derived.doubled }, children);
}
export default Component19526;
