import React from 'react';
const LABEL_33306 = 'component_33306';
export function Component33306({ value = 33306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33306, 'data-value': derived.doubled }, children);
}
export default Component33306;
