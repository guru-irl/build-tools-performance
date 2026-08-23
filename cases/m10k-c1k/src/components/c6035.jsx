import React from 'react';
const LABEL_6035 = 'component_6035';
export function Component6035({ value = 6035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6035, 'data-value': derived.doubled }, children);
}
export default Component6035;
