import React from 'react';
const LABEL_14724 = 'component_14724';
export function Component14724({ value = 14724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14724, 'data-value': derived.doubled }, children);
}
export default Component14724;
