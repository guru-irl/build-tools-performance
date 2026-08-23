import React from 'react';
const LABEL_5658 = 'component_5658';
export function Component5658({ value = 5658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5658, 'data-value': derived.doubled }, children);
}
export default Component5658;
