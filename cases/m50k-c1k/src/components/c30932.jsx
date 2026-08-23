import React from 'react';
const LABEL_30932 = 'component_30932';
export function Component30932({ value = 30932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30932, 'data-value': derived.doubled }, children);
}
export default Component30932;
