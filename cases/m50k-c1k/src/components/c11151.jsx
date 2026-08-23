import React from 'react';
const LABEL_11151 = 'component_11151';
export function Component11151({ value = 11151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11151, 'data-value': derived.doubled }, children);
}
export default Component11151;
