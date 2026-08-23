import React from 'react';
const LABEL_23920 = 'component_23920';
export function Component23920({ value = 23920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23920, 'data-value': derived.doubled }, children);
}
export default Component23920;
