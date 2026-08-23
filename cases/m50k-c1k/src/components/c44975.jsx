import React from 'react';
const LABEL_44975 = 'component_44975';
export function Component44975({ value = 44975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44975, 'data-value': derived.doubled }, children);
}
export default Component44975;
