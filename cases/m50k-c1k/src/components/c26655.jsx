import React from 'react';
const LABEL_26655 = 'component_26655';
export function Component26655({ value = 26655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26655, 'data-value': derived.doubled }, children);
}
export default Component26655;
