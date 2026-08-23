import React from 'react';
const LABEL_23355 = 'component_23355';
export function Component23355({ value = 23355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23355, 'data-value': derived.doubled }, children);
}
export default Component23355;
