import React from 'react';
const LABEL_19246 = 'component_19246';
export function Component19246({ value = 19246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19246, 'data-value': derived.doubled }, children);
}
export default Component19246;
