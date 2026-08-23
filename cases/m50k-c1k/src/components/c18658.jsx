import React from 'react';
const LABEL_18658 = 'component_18658';
export function Component18658({ value = 18658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18658, 'data-value': derived.doubled }, children);
}
export default Component18658;
