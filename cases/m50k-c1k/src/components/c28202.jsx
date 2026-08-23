import React from 'react';
const LABEL_28202 = 'component_28202';
export function Component28202({ value = 28202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28202, 'data-value': derived.doubled }, children);
}
export default Component28202;
