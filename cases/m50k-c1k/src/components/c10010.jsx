import React from 'react';
const LABEL_10010 = 'component_10010';
export function Component10010({ value = 10010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10010, 'data-value': derived.doubled }, children);
}
export default Component10010;
