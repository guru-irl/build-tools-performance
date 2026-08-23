import React from 'react';
const LABEL_19312 = 'component_19312';
export function Component19312({ value = 19312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19312, 'data-value': derived.doubled }, children);
}
export default Component19312;
