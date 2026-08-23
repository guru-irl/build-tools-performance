import React from 'react';
const LABEL_44951 = 'component_44951';
export function Component44951({ value = 44951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44951, 'data-value': derived.doubled }, children);
}
export default Component44951;
