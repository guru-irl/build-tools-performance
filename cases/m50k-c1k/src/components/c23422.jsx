import React from 'react';
const LABEL_23422 = 'component_23422';
export function Component23422({ value = 23422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23422, 'data-value': derived.doubled }, children);
}
export default Component23422;
