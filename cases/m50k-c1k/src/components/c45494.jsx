import React from 'react';
const LABEL_45494 = 'component_45494';
export function Component45494({ value = 45494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45494, 'data-value': derived.doubled }, children);
}
export default Component45494;
