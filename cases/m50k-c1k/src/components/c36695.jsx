import React from 'react';
const LABEL_36695 = 'component_36695';
export function Component36695({ value = 36695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36695, 'data-value': derived.doubled }, children);
}
export default Component36695;
