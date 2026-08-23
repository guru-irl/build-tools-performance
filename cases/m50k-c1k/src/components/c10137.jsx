import React from 'react';
const LABEL_10137 = 'component_10137';
export function Component10137({ value = 10137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10137, 'data-value': derived.doubled }, children);
}
export default Component10137;
