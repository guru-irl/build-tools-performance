import React from 'react';
const LABEL_28192 = 'component_28192';
export function Component28192({ value = 28192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28192, 'data-value': derived.doubled }, children);
}
export default Component28192;
