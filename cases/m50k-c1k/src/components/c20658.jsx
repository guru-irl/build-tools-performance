import React from 'react';
const LABEL_20658 = 'component_20658';
export function Component20658({ value = 20658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20658, 'data-value': derived.doubled }, children);
}
export default Component20658;
