import React from 'react';
const LABEL_4355 = 'component_4355';
export function Component4355({ value = 4355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4355, 'data-value': derived.doubled }, children);
}
export default Component4355;
