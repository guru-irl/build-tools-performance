import React from 'react';
const LABEL_4674 = 'component_4674';
export function Component4674({ value = 4674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4674, 'data-value': derived.doubled }, children);
}
export default Component4674;
