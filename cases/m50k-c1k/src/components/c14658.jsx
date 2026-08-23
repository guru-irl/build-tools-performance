import React from 'react';
const LABEL_14658 = 'component_14658';
export function Component14658({ value = 14658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14658, 'data-value': derived.doubled }, children);
}
export default Component14658;
