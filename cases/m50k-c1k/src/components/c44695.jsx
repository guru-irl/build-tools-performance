import React from 'react';
const LABEL_44695 = 'component_44695';
export function Component44695({ value = 44695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44695, 'data-value': derived.doubled }, children);
}
export default Component44695;
