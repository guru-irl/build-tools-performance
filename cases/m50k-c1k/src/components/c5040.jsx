import React from 'react';
const LABEL_5040 = 'component_5040';
export function Component5040({ value = 5040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5040, 'data-value': derived.doubled }, children);
}
export default Component5040;
