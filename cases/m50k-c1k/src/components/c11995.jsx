import React from 'react';
const LABEL_11995 = 'component_11995';
export function Component11995({ value = 11995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11995, 'data-value': derived.doubled }, children);
}
export default Component11995;
