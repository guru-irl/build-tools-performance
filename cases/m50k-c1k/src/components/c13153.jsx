import React from 'react';
const LABEL_13153 = 'component_13153';
export function Component13153({ value = 13153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13153, 'data-value': derived.doubled }, children);
}
export default Component13153;
