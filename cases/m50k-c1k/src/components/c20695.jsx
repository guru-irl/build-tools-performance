import React from 'react';
const LABEL_20695 = 'component_20695';
export function Component20695({ value = 20695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20695, 'data-value': derived.doubled }, children);
}
export default Component20695;
