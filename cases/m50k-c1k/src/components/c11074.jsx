import React from 'react';
const LABEL_11074 = 'component_11074';
export function Component11074({ value = 11074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11074, 'data-value': derived.doubled }, children);
}
export default Component11074;
