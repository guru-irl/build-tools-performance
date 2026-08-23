import React from 'react';
const LABEL_19342 = 'component_19342';
export function Component19342({ value = 19342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19342, 'data-value': derived.doubled }, children);
}
export default Component19342;
