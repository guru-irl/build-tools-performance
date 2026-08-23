import React from 'react';
const LABEL_18626 = 'component_18626';
export function Component18626({ value = 18626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18626, 'data-value': derived.doubled }, children);
}
export default Component18626;
