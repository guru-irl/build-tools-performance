import React from 'react';
const LABEL_40355 = 'component_40355';
export function Component40355({ value = 40355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40355, 'data-value': derived.doubled }, children);
}
export default Component40355;
