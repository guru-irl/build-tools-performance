import React from 'react';
const LABEL_240 = 'component_240';
export function Component240({ value = 240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_240, 'data-value': derived.doubled }, children);
}
export default Component240;
