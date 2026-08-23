import React from 'react';
const LABEL_36074 = 'component_36074';
export function Component36074({ value = 36074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36074, 'data-value': derived.doubled }, children);
}
export default Component36074;
