import React from 'react';
const LABEL_1658 = 'component_1658';
export function Component1658({ value = 1658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1658, 'data-value': derived.doubled }, children);
}
export default Component1658;
