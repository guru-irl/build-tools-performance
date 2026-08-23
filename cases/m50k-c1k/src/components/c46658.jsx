import React from 'react';
const LABEL_46658 = 'component_46658';
export function Component46658({ value = 46658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46658, 'data-value': derived.doubled }, children);
}
export default Component46658;
