import React from 'react';
const LABEL_36240 = 'component_36240';
export function Component36240({ value = 36240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36240, 'data-value': derived.doubled }, children);
}
export default Component36240;
