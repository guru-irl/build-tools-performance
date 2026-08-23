import React from 'react';
const LABEL_33889 = 'component_33889';
export function Component33889({ value = 33889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33889, 'data-value': derived.doubled }, children);
}
export default Component33889;
