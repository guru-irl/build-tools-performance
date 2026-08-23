import React from 'react';
const LABEL_44658 = 'component_44658';
export function Component44658({ value = 44658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44658, 'data-value': derived.doubled }, children);
}
export default Component44658;
