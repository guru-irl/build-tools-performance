import React from 'react';
const LABEL_1043 = 'component_1043';
export function Component1043({ value = 1043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1043, 'data-value': derived.doubled }, children);
}
export default Component1043;
