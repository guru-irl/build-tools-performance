import React from 'react';
const LABEL_40724 = 'component_40724';
export function Component40724({ value = 40724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40724, 'data-value': derived.doubled }, children);
}
export default Component40724;
