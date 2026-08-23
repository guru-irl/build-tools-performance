import React from 'react';
const LABEL_28625 = 'component_28625';
export function Component28625({ value = 28625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28625, 'data-value': derived.doubled }, children);
}
export default Component28625;
