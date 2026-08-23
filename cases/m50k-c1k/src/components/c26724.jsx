import React from 'react';
const LABEL_26724 = 'component_26724';
export function Component26724({ value = 26724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26724, 'data-value': derived.doubled }, children);
}
export default Component26724;
