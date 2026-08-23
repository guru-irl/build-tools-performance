import React from 'react';
const LABEL_14010 = 'component_14010';
export function Component14010({ value = 14010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14010, 'data-value': derived.doubled }, children);
}
export default Component14010;
