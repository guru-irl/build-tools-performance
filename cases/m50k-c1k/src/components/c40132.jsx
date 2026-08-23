import React from 'react';
const LABEL_40132 = 'component_40132';
export function Component40132({ value = 40132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40132, 'data-value': derived.doubled }, children);
}
export default Component40132;
