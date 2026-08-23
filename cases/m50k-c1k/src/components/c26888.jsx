import React from 'react';
const LABEL_26888 = 'component_26888';
export function Component26888({ value = 26888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26888, 'data-value': derived.doubled }, children);
}
export default Component26888;
