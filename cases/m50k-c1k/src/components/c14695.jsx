import React from 'react';
const LABEL_14695 = 'component_14695';
export function Component14695({ value = 14695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14695, 'data-value': derived.doubled }, children);
}
export default Component14695;
