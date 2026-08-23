import React from 'react';
const LABEL_5230 = 'component_5230';
export function Component5230({ value = 5230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5230, 'data-value': derived.doubled }, children);
}
export default Component5230;
