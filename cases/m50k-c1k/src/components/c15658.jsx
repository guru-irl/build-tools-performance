import React from 'react';
const LABEL_15658 = 'component_15658';
export function Component15658({ value = 15658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15658, 'data-value': derived.doubled }, children);
}
export default Component15658;
