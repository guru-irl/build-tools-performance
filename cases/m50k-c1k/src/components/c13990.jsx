import React from 'react';
const LABEL_13990 = 'component_13990';
export function Component13990({ value = 13990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13990, 'data-value': derived.doubled }, children);
}
export default Component13990;
