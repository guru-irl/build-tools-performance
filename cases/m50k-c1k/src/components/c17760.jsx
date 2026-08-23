import React from 'react';
const LABEL_17760 = 'component_17760';
export function Component17760({ value = 17760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17760, 'data-value': derived.doubled }, children);
}
export default Component17760;
