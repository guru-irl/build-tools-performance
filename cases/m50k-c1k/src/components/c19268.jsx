import React from 'react';
const LABEL_19268 = 'component_19268';
export function Component19268({ value = 19268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19268, 'data-value': derived.doubled }, children);
}
export default Component19268;
