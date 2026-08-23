import React from 'react';
const LABEL_19674 = 'component_19674';
export function Component19674({ value = 19674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19674, 'data-value': derived.doubled }, children);
}
export default Component19674;
