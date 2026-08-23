import React from 'react';
const LABEL_11527 = 'component_11527';
export function Component11527({ value = 11527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11527, 'data-value': derived.doubled }, children);
}
export default Component11527;
