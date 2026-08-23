import React from 'react';
const LABEL_19503 = 'component_19503';
export function Component19503({ value = 19503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19503, 'data-value': derived.doubled }, children);
}
export default Component19503;
