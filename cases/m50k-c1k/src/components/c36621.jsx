import React from 'react';
const LABEL_36621 = 'component_36621';
export function Component36621({ value = 36621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36621, 'data-value': derived.doubled }, children);
}
export default Component36621;
