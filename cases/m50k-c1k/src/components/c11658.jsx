import React from 'react';
const LABEL_11658 = 'component_11658';
export function Component11658({ value = 11658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11658, 'data-value': derived.doubled }, children);
}
export default Component11658;
