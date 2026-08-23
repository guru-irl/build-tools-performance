import React from 'react';
const LABEL_28050 = 'component_28050';
export function Component28050({ value = 28050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28050, 'data-value': derived.doubled }, children);
}
export default Component28050;
