import React from 'react';
const LABEL_4002 = 'component_4002';
export function Component4002({ value = 4002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4002, 'data-value': derived.doubled }, children);
}
export default Component4002;
