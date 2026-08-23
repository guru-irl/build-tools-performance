import React from 'react';
const LABEL_35838 = 'component_35838';
export function Component35838({ value = 35838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35838, 'data-value': derived.doubled }, children);
}
export default Component35838;
