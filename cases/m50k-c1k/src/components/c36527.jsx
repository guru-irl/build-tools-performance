import React from 'react';
const LABEL_36527 = 'component_36527';
export function Component36527({ value = 36527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36527, 'data-value': derived.doubled }, children);
}
export default Component36527;
