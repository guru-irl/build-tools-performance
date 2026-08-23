import React from 'react';
const LABEL_11621 = 'component_11621';
export function Component11621({ value = 11621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11621, 'data-value': derived.doubled }, children);
}
export default Component11621;
