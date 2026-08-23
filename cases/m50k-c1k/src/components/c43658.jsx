import React from 'react';
const LABEL_43658 = 'component_43658';
export function Component43658({ value = 43658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43658, 'data-value': derived.doubled }, children);
}
export default Component43658;
